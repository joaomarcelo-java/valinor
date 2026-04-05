import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from '../../services/board';
import { Board } from '../../models/board.model';
import { ColumnComponent } from "../column/column";
import { ColumnService } from '../../services/column';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  imports: [CommonModule, ColumnComponent, DragDropModule],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() boardId: string | null = null;
  board: Board | null = null;

  constructor(
    private boardService: BoardService,
    private columnService: ColumnService,
    private cdr: ChangeDetectorRef
  ) {}

  // Inicializa o componente carregando o board caso o id esteja presente
  ngOnInit() {
    if (this.boardId) {
      this.loadBoard();
    }
  }

  // Monitora mudanças no input boardId para atualizar os dados
  ngOnChanges(changes: SimpleChanges) {
    const boardIdChange = changes['boardId'];

    if (boardIdChange) {
      const id = boardIdChange.currentValue;

      if (id) {
        this.boardService.getBoard(id).subscribe((board) => {
          this.board = board;
          this.cdr.detectChanges();
        });
      } else {
        this.board = null;
        this.cdr.detectChanges();
      }
    }
  }

  // Busca os dados completos do board através do serviço
  loadBoard() {
    this.boardService.getBoard(this.boardId!).subscribe((board) => {
      this.board = board;
      this.cdr.detectChanges();
    });
  }

  // Abre um prompt para criar uma nova coluna no board atual
  createColumn() {
    const title = prompt("Nome da coluna:");
    if (!title) return;

    this.columnService.create(title, this.boardId!).subscribe(() => {
      this.loadBoard();
      this.cdr.detectChanges();
    });
  }

  // Retorna uma lista com os identificadores de todas as colunas
  getIds(): string[] {
    return this.board?.columns.map(c => c.id) || [];
  }

  // Gerencia o reposicionamento visual e persistência das colunas após o drag e drop
  dropColumn(event: CdkDragDrop<any>) {
    if (event.previousIndex === event.currentIndex || !this.board) return;

    const movedColumn = event.item.data;
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);

    const reorderDto = {
      columnId: movedColumn.id,
      fromOrder: event.previousIndex + 1,
      toOrder: event.currentIndex + 1
    };

    this.columnService.reorder(this.boardId!, reorderDto).subscribe({
      error: (err) => {
        console.error('Erro no reorder do back-end:', err);
        this.loadBoard();
      }
    });
  }
}