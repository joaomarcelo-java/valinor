import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private apiUrl = 'http://localhost:3000/boards';
  
  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get<Board[]>(this.apiUrl);
  }

  getBoard(id: string){
    return this.http.get<Board>(`${this.apiUrl}/${id}`);
  }

  create(title: string){
    return this.http.post<Board>(this.apiUrl, { title }); 
  }

  update(id: string, title: string){
    return this.http.patch<Board>(`${this.apiUrl}/${id}`, { title });
  }

  delete(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

