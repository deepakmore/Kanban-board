import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  selectedTask: any;
  taskName: any;

  flags = {
    isMoveBackwardEnabled: false,
    isMoveForwardEnabled: false,
    isDeleteEnabled: false
  }

  constructor() { }

  ngOnInit() {
  }

  onAddCard(): void {

  }

  onMoveBackCard(): void {

  }

  onMoveForwardCard(): void {

  }

  onDeleteCard(): void {

  }
}
