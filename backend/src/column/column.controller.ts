import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { ReorderColumnDto } from './dto/reorder-column.dto';

@Controller('boards/:boardId/columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  // Altera a ordem de uma coluna dentro do board
  @Patch('reorder')
  reorder(
    @Param('boardId') boardId: string,
    @Body() dto: ReorderColumnDto,
  ) {
    return this.columnService.reorder(boardId, dto);
  }

  // Cria uma nova coluna vinculada a um board específico
  @Post()
  create(
    @Param('boardId') boardId: string,
    @Body() createColumnDto: CreateColumnDto,
  ) {
    return this.columnService.create(createColumnDto, boardId);
  }

  // Busca os detalhes de uma coluna específica
  @Get(':id')
  findOne(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
  ) {
    return this.columnService.findOne(id, boardId);
  }

  // Lista todas as colunas pertencentes a um board
  @Get()
  findAll(@Param('boardId') boardId: string) {
    return this.columnService.findAll(boardId);
  }

  // Atualiza as informações de uma coluna existente
  @Patch(':id')
  update(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
    @Body() updateColumnDto: UpdateColumnDto,
  ) {
    return this.columnService.update(id, boardId, updateColumnDto);
  }

  // Remove uma coluna do board pelo seu id
  @Delete(':id')
  delete(
    @Param('boardId') boardId: string,
    @Param('id') id: string,
  ) {
    return this.columnService.delete(id, boardId);
  }
}