import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CutStringPipe } from './pipes/cut-string.pipe';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CutStringPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  exports: [TodoListComponent]
})
export class TodoModule { }
