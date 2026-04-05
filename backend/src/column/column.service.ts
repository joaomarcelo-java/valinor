import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BoardService } from '../board/board.service';
import { ReorderColumnDto } from './dto/reorder-column.dto';

@Injectable()
export class ColumnService {
  constructor(
    private prisma: PrismaService,
    private boardService: BoardService,
  ) {}

  // Cria uma nova coluna calculando automaticamente a última posição na ordem
  async create(createColumnDto: CreateColumnDto, boardId: string) {
    await this.boardService.findOne(boardId);

    const lastColumn = await this.prisma.column.findFirst({
      where: { boardId },
      orderBy: { order: 'desc' },
    });

    const order = lastColumn ? lastColumn.order + 1 : 1;

    return await this.prisma.column.create({
      data: {
        ...createColumnDto,
        boardId,
        order,
      },
    });
  }

  // Busca uma coluna específica dentro de um board
  async findOne(columnId: string, boardId: string) {
    await this.boardService.findOne(boardId);

    const column = await this.prisma.column.findFirst({
      where: { id: columnId, boardId },
      include: { tasks: { orderBy: { order: 'asc' } } },
    });

    if (!column) {
      throw new NotFoundException('Coluna não encontrada!');
    }

    return column;
  }

  // Retorna todas as colunas de um board ordenadas com suas respectivas tasks
  async findAll(boardId: string) {
    return await this.prisma.column.findMany({
      where: { boardId },
      orderBy: { order: 'asc' },
      include: { tasks: { orderBy: { order: 'asc' } } },
    });
  }

  // Atualiza as informações básicas de uma coluna
  async update(columnId: string, boardId: string, updateColumnDto: UpdateColumnDto) {
    await this.findOne(columnId, boardId);

    return await this.prisma.column.update({
      where: { id: columnId },
      data: updateColumnDto,
      include: { tasks: true },
    });
  }

  // Remove uma coluna e reorganiza a numeração de ordem das colunas restantes
  async delete(columnId: string, boardId: string) {
    const column = await this.findOne(columnId, boardId);

    await this.prisma.$transaction([
      this.prisma.column.delete({
        where: { id: columnId },
      }),
      this.prisma.column.updateMany({
        where: { boardId, order: { gt: column.order } },
        data: { order: { decrement: 1 } },
      }),
    ]);

    return { message: 'Coluna removida com sucesso!' };
  }

  // Altera a posição de uma coluna e ajusta o índice das outras impactadas
  async reorder(boardId: string, reorderColumnDto: ReorderColumnDto) {
    const { columnId, fromOrder, toOrder } = reorderColumnDto;
    const column = await this.findOne(columnId, boardId);

    if (fromOrder === toOrder) {
      return column;
    }

    await this.prisma.$transaction(async (tx) => {
      if (toOrder < fromOrder) {
        await tx.column.updateMany({
          where: { boardId, order: { gte: toOrder, lt: fromOrder } },
          data: { order: { increment: 1 } },
        });
      }

      if (toOrder > fromOrder) {
        await tx.column.updateMany({
          where: { boardId, order: { gt: fromOrder, lte: toOrder } },
          data: { order: { decrement: 1 } },
        });
      }

      await tx.column.update({
        where: { id: columnId },
        data: { order: toOrder },
      });
    });
  }
}