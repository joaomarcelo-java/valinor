import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { ReorderTask } from '../models/task-reorder.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = (boardId: string, columnId: string) =>
    `http://localhost:3000/boards/${boardId}/columns/${columnId}/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(boardId: string, columnId: string) {
    return this.http.get<Task[]>(this.apiUrl(boardId, columnId));
  }

  getTask(boardId: string, columnId: string, id: string){
    return this.http.get<Task>(`${this.apiUrl(boardId, columnId)}/${id}`);
  }

  create(title: string, boardId: string, columnId: string, limitDate: string){
    return this.http.post<Task>(this.apiUrl(boardId, columnId), { title, limitDate }); 
  }

  update(boardId: string, columnId: string, id: string, title: string){
    return this.http.patch<Task>(`${this.apiUrl(boardId, columnId)}/${id}`, { title });
  }

  delete(boardId: string, columnId: string, id: string){
    return this.http.delete(`${this.apiUrl(boardId, columnId)}/${id}`);
  }

reorder(boardId: string, dto: ReorderTask) {
  return this.http.patch(`${this.apiUrl(boardId, dto.fromColumnId)}/reorder`,dto);
}
}
