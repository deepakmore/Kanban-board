import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanbanViewComponent} from './kanban-view.component';
import {FormsModule} from '@angular/forms';
import {KanbanCardComponent} from "./kanban-card/kanban-card.component";
import {KanbanStageComponent} from "./kanban-stage/kanban-stage.component";


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [KanbanViewComponent],
  declarations: [KanbanViewComponent, KanbanCardComponent, KanbanStageComponent]
})
export class KanbanViewModule { }
