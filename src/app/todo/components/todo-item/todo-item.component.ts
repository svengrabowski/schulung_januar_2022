import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoItem | null = null;
  @Input() index: number = 0;

  @Output() doneClicked = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  test(): void {
    console.log('button clicked!');
    this.doneClicked.emit(this.todo!);
  }

}
