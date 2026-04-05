import { ChangeDetectorRef, Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column } from '../../models/column.model';
import { TaskComponent } from '../task/task';
import { TaskService } from '../../services/task';
import { ColumnService } from '../../services/column';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  imports: [CommonModule, TaskComponent, DragDropModule],
  templateUrl: './column.html',
  styleUrl: './column.css',
})
export class ColumnComponent implements OnInit {
  @Input() column!: Column;
  @Input() boardId!: string;
  @Input() allColumnIds: string[] = [];
  @Output() columnDeleted = new EventEmitter<void>();
  @Output() columnChanged = new EventEmitter<void>();

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private columnService: ColumnService
  ) {}

  // Garante a detecção de mudanças inicial ao carregar a coluna
  ngOnInit() {
    this.cdr.detectChanges();
  }

  // Coordena a movimentação de tarefas entre listas e sincroniza com o banco de dados
  dropTask(event: CdkDragDrop<any[]>) {
    // Indices de ordenação puxados no event
    const taskId = event.item.data.id;
    const fromColumnId = event.previousContainer.id;
    const toColumnId = event.container.id;
    const fromOrder = event.previousIndex + 1;
    const toOrder = event.currentIndex + 1;

    if (event.previousContainer === event.container) {
      if (event.previousIndex === event.currentIndex) return;
      moveItemInArray(this.column.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.taskService.reorder(this.boardId, { taskId, fromColumnId, toColumnId, fromOrder, toOrder }).subscribe({
      next: () => console.log('Task persistida com sucesso!'),
      error: (err) => {
        console.error('Erro ao salvar ordem:', err);
        this.columnChanged.emit();
      }
    });
  }

  // Coleta dados via prompt e valida a data antes de criar uma nova tarefa
  createTask() {
    const title = prompt('Nome da tarefa:');
    if (!title) return;

    const dateInput = prompt('Data limite (formato: DD/MM/AAAA):');
    if (!dateInput) return;

    const parts = dateInput.split('/');
    if (parts.length !== 3) return;

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const limitDate = new Date(year, month, day);
    if (isNaN(limitDate.getTime())) return;

    this.taskService.create(title, this.boardId, this.column.id, limitDate.toISOString()).subscribe((task) => {
      this.column.tasks.push(task);
      this.cdr.detectChanges();
    });
  }

  // Emite um evento para notificar alterações na estrutura da coluna
  onColumnChanged() {
    this.columnChanged.emit();
  }

  // Remove a coluna atual após confirmação da exclusão no serviço
  deleteColumn() {
    this.columnService.delete(this.boardId, this.column.id).subscribe(() => {
      this.columnDeleted.emit();
    });
  }

  // Altera o título da coluna através de uma interação via prompt
  editColumn() {
    const title = prompt("Digite o novo nome da coluna:");
    if (!title) return;

    this.columnService.update(this.boardId, this.column.id, title).subscribe(() => {
      this.columnChanged.emit();
    });
  }
}