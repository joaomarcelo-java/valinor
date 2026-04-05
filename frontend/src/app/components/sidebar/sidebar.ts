import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../services/board';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent implements OnInit {
  boards: Board[] = [];
  selectedBoardId: string | null = null;

  @Output() boardSelected = new EventEmitter<string>();
  @Output() boardDeleted = new EventEmitter<void>();

  constructor(private boardService: BoardService, private cdr: ChangeDetectorRef) {}

  // Carrega a lista inicial de quadros assim que o componente é instanciado
  ngOnInit() {
    this.loadBoards();
  }

  // Solicita ao serviço a lista atualizada de todos os quadros cadastrados
  loadBoards() {
    this.boardService.getBoards().subscribe((boards) => {
      this.boards = boards;
      this.cdr.detectChanges();
    });
  }

  // Define o quadro ativo e notifica os componentes interessados sobre a seleção
  selectBoard(boardId: string) {
    this.selectedBoardId = boardId;
    this.boardSelected.emit(boardId);
  }

  // Captura o nome via prompt e solicita a criação de um novo quadro no sistema
  createBoard() {
    const title = prompt('Nome do board:');
    if (!title) return;

    this.boardService.create(title).subscribe((board) => {
      this.boards.push(board);
      this.selectBoard(board.id);
    });
  }

  // Remove um quadro específico da lista e limpa a seleção caso o quadro excluído fosse o ativo
  deleteBoard(boardId: string) {
    this.boardService.delete(boardId).subscribe(() => {
      this.boards = this.boards.filter(b => b.id !== boardId);

      if (this.selectedBoardId === boardId) {
        this.selectedBoardId = null;
      }

      this.boardDeleted.emit();
      this.cdr.detectChanges();
    });
  }
}