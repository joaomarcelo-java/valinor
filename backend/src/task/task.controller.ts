import { Controller, Param, Post, Body, Get, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ReorderTaskDto } from './dto/reorder-task.dto';

@Controller('boards/:boardId/columns/:columnId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // Altera a posição de uma task entre colunas ou na mesma coluna
  @Patch('reorder')
  reorder(
    @Param('boardId') boardId: string,
    @Body() dto: ReorderTaskDto,
  ) {
    return this.taskService.reorder(boardId, dto);
  }

  // Cria uma nova task vinculada a uma coluna específica
  @Post()
  create(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.taskService.create(createTaskDto, columnId, boardId);
  }

  // Busca os detalhes de uma task específica
  @Get(':id')
  findOne(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
    @Param('id') taskId: string,
  ) {
    return this.taskService.findOne(taskId, columnId, boardId);
  }

  // Lista todas as tasks de uma determinada coluna
  @Get()
  findAll(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
  ) {
    return this.taskService.findAll(columnId, boardId);
  }

  // Atualiza as informações de uma task existente
  @Patch(':id')
  update(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
    @Param('id') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(taskId, columnId, boardId, updateTaskDto);
  }

  // Remove uma task do sistema permanentemente
  @Delete(':id')
  delete(
    @Param('boardId') boardId: string,
    @Param('columnId') columnId: string,
    @Param('id') taskId: string,
  ) {
    return this.taskService.delete(taskId, columnId, boardId);
  }
}