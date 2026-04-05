import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  // Cria um novo board no banco de dados
  async create(createBoardDto: CreateBoardDto) {
    return await this.prisma.board.create({
      data: createBoardDto,
    });
  }

  // Lista todos os boards ordenados por título incluindo colunas e tarefas
  async findAll() {
    return await this.prisma.board.findMany({
      include: {
        columns: {
          orderBy: { order: 'asc' },
          include: {
            tasks: { orderBy: { order: 'asc' } },
          },
        },
      },
      orderBy: { title: 'asc' },
    });
  }

  // Busca um board por id 
  async findOne(id: string) {
    const board = await this.prisma.board.findUnique({
      where: { id },
      include: {
        columns: {
          orderBy: { order: 'asc' },
          include: {
            tasks: { orderBy: { order: 'asc' } },
          },
        },
      },
    });

    if (!board) {
      throw new NotFoundException(`Board "${id}" não encontrado!`);
    }

    return board;
  }

  // Atualiza os dados de um board específico
  async update(id: string, updateBoardDto: UpdateBoardDto) {
    await this.findOne(id);

    return await this.prisma.board.update({
      where: { id },
      data: updateBoardDto,
      include: { columns: true },
    });
  }

  // Remove um board do sistema
  async delete(id: string) {
    await this.findOne(id);

    return await this.prisma.board.delete({
      where: { id },
    });
  }
}