import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar';
import { BoardComponent } from './components/board/board';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, BoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedBoardId: string | null = null;

  onBoardSelected(boardId: string) {
    this.selectedBoardId = boardId;
  }

  onBoardDeleted(){
    this.selectedBoardId = null;
  }
}