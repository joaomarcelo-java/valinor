import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ColumnService } from '../column/column.service';
import { BoardService } from '../board/board.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ReorderTaskDto } from './dto/reorder-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private columnService: ColumnService,
    private boardService: BoardService
  ) {}

  // Cria uma nova task definindo automaticamente sua posição na coluna
  async create(createTaskDto: CreateTaskDto, columnId: string, boardId: string) {
    await this.boardService.findOne(boardId);
    await this.columnService.findOne(columnId, boardId);

    const lastTask = await this.prisma.task.findFirst({
      where: { columnId },
      orderBy: { order: 'desc' },
    });

    const order = lastTask ? lastTask.order + 1 : 1;

    return await this.prisma.task.create({
      data: {
        ...createTaskDto,
        columnId,
        order,
      },
    });
  }

  // Busca uma task específica validando a existência do board e da coluna
  async findOne(taskId: string, columnId: string, boardId: string) {
    await this.boardService.findOne(boardId);
    await this.columnService.findOne(columnId, boardId);

    const task = await this.prisma.task.findFirst({
      where: { id: taskId, columnId },
    });

    if (!task) {
      throw new NotFoundException('Task não encontrada!');
    }

    return task;
  }

  // Lista todas as tasks de uma coluna específica ordenadas por posição
  async findAll(columnId: string, boardId: string) {
    await this.boardService.findOne(boardId);
    await this.columnService.findOne(columnId, boardId);

    return await this.prisma.task.findMany({
      where: { columnId },
      orderBy: { order: 'asc' },
    });
  }

  // Atualiza as informações de uma task existente
  async update(taskId: string, columnId: string, boardId: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(taskId, columnId, boardId);

    return await this.prisma.task.update({
      where: { id: taskId },
      data: updateTaskDto,
    });
  }

  // Remove uma task e reorganiza a ordem das demais tasks na coluna
  async delete(taskId: string, columnId: string, boardId: string) {
    const task = await this.findOne(taskId, columnId, boardId);

    await this.prisma.$transaction([
      this.prisma.task.delete({
        where: { id: taskId },
      }),
      this.prisma.task.updateMany({
        where: {
          columnId,
          order: { gt: task.order },
        },
        data: { order: { decrement: 1 } },
      }),
    ]);

    return { message: 'Task removida com sucesso!' };
  }

  // Move uma task entre posições ou colunas ajustando os índices de ordenação
  async reorder(boardId: string, reorderTaskDto: ReorderTaskDto) {
    await this.boardService.findOne(boardId);
    const { taskId, fromColumnId, fromOrder, toColumnId, toOrder } = reorderTaskDto;

    const task = await this.findOne(taskId, fromColumnId, boardId);
    if (!task) {
      throw new NotFoundException('Task não encontrada na coluna de origem!');
    }

    const targetColumn = await this.columnService.findOne(toColumnId, boardId);
    if (!targetColumn) {
      throw new NotFoundException('Coluna de destino não encontrada!');
    }

    // O uso de $transaction: ou todas as atualizações funcionam, ou nada muda no banco
    await this.prisma.$transaction(async (tx) => {
        // Todos que tinham uma ordem maior (estavam abaixo dela) descem uma posição para fechar o "buraco"
        await tx.task.updateMany({
            where: { columnId: fromColumnId, order: { gt: fromOrder } },
            data: { order: { decrement: 1 } },
        });

        // Todos que estão na posição desejada (toOrder) ou abaixo dela sobem uma posição para "abrir vaga"
        await tx.task.updateMany({
            where: { columnId: toColumnId, order: { gte: toOrder } },
            data: { order: { increment: 1 } },
        });

        // Agora que a origem foi ajustada e o destino tem um espaço livre, atualizamos a task com os novos dados
        await tx.task.update({
            where: { id: taskId },
            data: { columnId: toColumnId, order: toOrder },
        });
    });
  }
}