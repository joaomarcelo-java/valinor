import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Column } from '../models/column.model';
import { ReorderColumn } from '../models/column-reorder';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private apiUrl = (boardId: string) =>
    `https://valinor-2czm.onrender.com/boards/${boardId}/columns`;

  constructor(private http: HttpClient) {}

  getColumns(boardId: string) {
    return this.http.get<Column[]>(this.apiUrl(boardId));
  }

  getColumn(boardId: string, id: string){
    return this.http.get<Column>(`${this.apiUrl(boardId)}/${id}`);
  }

  create(title: string, boardId: string){
    return this.http.post<Column>(this.apiUrl(boardId), { title }); 
  }

  update(boardId: string, id: string, title: string){
    return this.http.patch<Column>(`${this.apiUrl(boardId)}/${id}`, { title });
  }

  delete(boardId: string, id: string){
    return this.http.delete(`${this.apiUrl(boardId)}/${id}`);
  }

  reorder(boardId: string, dto: ReorderColumn){
    return this.http.patch(`http://localhost:3000/boards/${boardId}/columns/reorder`, dto);
  }
}
