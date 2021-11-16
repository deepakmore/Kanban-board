import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  selectedTask: any;
  taskName: any;
  stageIdByTaskName: number;

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
    this.moveTask("BACKWARD");
  }

  onMoveForwardCard(): void {
    this.moveTask("FORWARD");
  }

  moveTask(action): void {
    let taskToAction = this.selectedTask;
    this.setStageId();
    this.removeCard();
    action === 'FORWARD' ? this.stages[this.stageIdByTaskName].cards.push(taskToAction):
        this.stages[this.stageIdByTaskName - 2].cards.push(taskToAction);
    this.setStageId();
    this.checkActionButtonsStatus();
  }

  onDeleteCard(): void {
    this.removeCard();
    this.clearSelectedTask();
    this.disabledActionButtons();
  }

  removeCard() {
    let index = this.stages[this.stageIdByTaskName - 1].cards.indexOf(this.selectedTask);
    if(index !== -1) {
      this.stages[this.stageIdByTaskName -1].cards.splice(index, 1);
    }
  }

  clearSelectedTask() {
    this.selectedTask = '';
  }

  disabledActionButtons(): void {
    this.flags.isMoveForwardEnabled = false;
    this.flags.isMoveBackwardEnabled = false;
    this.flags.isDeleteEnabled = false;
  }

  onCardselect(data) {
    this.selectedTask = data;
    this.setStageId();
    this.checkActionButtonsStatus();
    this.flags.isDeleteEnabled = true;
  }

  setStageId(): void {
    this.stages.forEach(stage => {
      if (stage.cards.indexOf(this.selectedTask) !== -1) {
        this.stageIdByTaskName = stage.id;
      }
    });
  }

  checkActionButtonsStatus() {
    this.flags.isMoveBackwardEnabled = this.stageIdByTaskName != 1;
    this.flags.isMoveForwardEnabled = this.stageIdByTaskName != 4;
  }
}
