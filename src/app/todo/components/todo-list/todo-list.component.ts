import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  public userName: string = 'Sven';
  public todos: TodoItem[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getAllTodos().subscribe(data => this.todos = data);
  }

  ngOnInit(): void {
  }

  onDoneClicked(item: TodoItem): void {
    this.todoService.todoChecked(item).subscribe(data => {
      const index = this.todos.findIndex(item => item.id === data.id);
      this.todos[index] = data;
    });
  }

}
