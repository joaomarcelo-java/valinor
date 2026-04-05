import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // Cria um novo board 
  @Post()
  async createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  // Busca um board específico
  @Get(':boardId')
  async getBoard(@Param('boardId') boardId: string) {
    return this.boardService.findOne(boardId);
  }

  // Lista todos os boards cadastrados
  @Get()
  async getAllBoards() {
    return this.boardService.findAll();
  }

  // Atualiza os dados de um board existente
  @Patch(':boardId')
  async updateBoard(@Param('boardId') boardId: string, @Body() updateBoardDto: CreateBoardDto) {
    return this.boardService.update(boardId, updateBoardDto);
  }

  // Remove um board do sistema
  @Delete(':boardId')
  async deleteBoard(@Param('boardId') boardId: string) {
    return this.boardService.delete(boardId);
  }
}