import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  imports: [CommonModule, DragDropModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() boardId!: string;
  @Input() columnId!: string;
  @Output() deletedTask = new EventEmitter<void>();
  @Output() taskChanged = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  // Remove a tarefa permanentemente através do serviço e notifica o componente pai
  deleteTask() {
    this.taskService.delete(this.boardId, this.columnId, this.task.id).subscribe(() => {
      this.deletedTask.emit();
    });
  }

  // Altera o título da tarefa via prompt e atualiza os dados no servidor
  editTask() {
    const title = prompt("Digite o novo conteúdo da task:");
    if (!title) return;

    this.taskService.update(this.boardId, this.columnId, this.task.id, title).subscribe(() => {
      this.taskChanged.emit();
    });
  }
}