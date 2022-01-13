import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent implements OnInit {

  @Output() todoSubmitted = new EventEmitter<TodoItem>();
  @Output() todoEdited = new EventEmitter<TodoItem>();

  @Input() public todo: TodoItem = new TodoItem();

  constructor() { }

  ngOnInit(): void {
  }

  isNewItem(): boolean {
    return !this.todo?.id;
  } 

  public onSubmit(form: NgForm): void {
    if(this.isNewItem()) {
      this.todoSubmitted.emit(this.todo);
    } else {
      this.todoEdited.emit(this.todo);
    }
    this.todo = new TodoItem();
    form.resetForm();
  }

}
