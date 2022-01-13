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
  public todoItemToBeEdited : TodoItem = new TodoItem(); 
  
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

  test() {
    let a = {
      name: 'Sven'
    }

    let b = {
      aProp: a,
      nachnamen: 'Grabowski'
    }

    let c = {...b};
    a.name = 'Tom';

    console.log(c);
  }

  saveNewTodo(item: TodoItem): void {
    this.subscriptiosn.push(this.todoService.saveTodo(item).subscribe(data => {
      this.todos.push(data);
    }));
  }

  onEditClicked(item: TodoItem): void {
    this.todoItemToBeEdited = { ...item };
  }

  updateTodoItem(item: TodoItem): void {
    this.todoService.updateTodo(item).subscribe(data => {
      const index = this.todos.findIndex(item => item.id === data.id);
      this.todos[index] = data;
    });
  }

  ngOnDestroy(): void {
      for(let i = 0; i < this.subscriptiosn.length; i++) {
        this.subscriptiosn[i].unsubscribe();
      }
  }
}
