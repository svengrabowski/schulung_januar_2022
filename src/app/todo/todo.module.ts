import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CutStringPipe } from './pipes/cut-string.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CutStringPipe,
    TodoFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  exports: [TodoListComponent]
})
export class TodoModule { }
