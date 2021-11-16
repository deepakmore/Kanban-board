import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  selectedTask: any;
  taskName: any;

  stages = [{
    id: 1,
    name: 'Backlog',
    cards: [],
  }, {
    id: 2,
    name: 'To Do',
    cards: [],
  }, {
    id: 3,
    name: 'Ongoing',
    cards: [],
  }, {
    id: 4,
    name: 'Done',
    cards: [],
  }];

  flags = {
    isMoveBackwardEnabled: false,
    isMoveForwardEnabled: false,
    isDeleteEnabled: false
  }

  constructor() { }

  ngOnInit() {
  }

  onAddCard(): void {
    if(this.taskName != undefined && this.taskName.trim() !== '') {
      this.stages[0].cards.push(this.taskName.trim());
    }
    this.taskName = "";
  }

  onMoveBackCard(): void {

  }

  onMoveForwardCard(): void {

  }

  onDeleteCard(): void {

  }

  onCardselect($event: Object) {

  }
}
