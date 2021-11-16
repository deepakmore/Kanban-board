import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanbanViewComponent} from './kanban-view.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [KanbanViewComponent],
  declarations: [KanbanViewComponent]
})
export class KanbanViewModule { }
