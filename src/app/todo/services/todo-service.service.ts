import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {

  private baseUrl = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(`${this.baseUrl}todos`);
  }

  todoChecked(item: TodoItem): Observable<TodoItem> {
    console.log(`${this.baseUrl}todos/` + item.id);
    return this.httpClient.patch<TodoItem>(`${this.baseUrl}todos/${item.id}`, { done: !item.done });
  }

}
