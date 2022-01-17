import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CutStringPipe } from './pipes/cut-string.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFromReactiveComponent } from './components/todo-from-reactive/todo-from-reactive.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CutStringPipe,
    TodoFormComponent,
    TodoFromReactiveComponent,
    ValidationMessageComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [TodoListComponent]
})
export class TodoModule { }
