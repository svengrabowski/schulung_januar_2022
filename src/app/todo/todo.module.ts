import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo-service.service';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  exports: [TodoListComponent]
})
export class TodoModule { }
