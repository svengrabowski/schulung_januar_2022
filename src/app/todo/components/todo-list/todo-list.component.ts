import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoItem } from '../../models/todo-item';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  providers: [TodoService]
})
export class TodoListComponent implements OnInit, OnDestroy {

  public userName: string = 'Sven';
  public todos: TodoItem[] = [];
  public error: boolean = false;
  public loading: boolean = true;
  
  private subscriptiosn: Subscription[] = [];

  constructor(private todoService: TodoService) {
    this.subscriptiosn.push(this.todoService.getAllTodos().subscribe({
      next: data => {
        this.todos = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    }));
  }

  ngOnInit(): void {
  }

  onDoneClicked(item: TodoItem): void {
    this.subscriptiosn.push(this.todoService.todoChecked(item).subscribe(data => {
      const index = this.todos.findIndex(item => item.id === data.id);
      this.todos[index] = data;
    }));
  }

  onDeleteClicked(item: TodoItem): void {
    this.subscriptiosn.push(this.todoService.deleteTodo(item).subscribe(data => {
      console.log(data);
      this.todos = this.todos.filter(todoItem => todoItem.id !== item.id);
    }));
  }

  ngOnDestroy(): void {
      for(let i = 0; i < this.subscriptiosn.length; i++) {
        this.subscriptiosn[i].unsubscribe();
      }
  }
}
