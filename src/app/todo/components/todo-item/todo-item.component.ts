import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() todo: TodoItem | null = null;
  @Input() index: number = 0;

  @Output() doneClicked = new EventEmitter<TodoItem>();
  @Output() deleteClicked = new EventEmitter<TodoItem>();

  constructor() { 
    console.log('Constructor: ', this.todo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit: ", this.todo);
  }

  test(): void {
    this.doneClicked.emit(this.todo!);
  }

  deleteBtnClicked(): void {
    this.deleteClicked.emit(this.todo!);
  }
}
