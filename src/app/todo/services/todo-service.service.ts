import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { debounce, debounceTime, Observable, retry, take, takeLast, map } from 'rxjs';

@Injectable()
export class TodoService {

  private baseUrl = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  getAllTodos(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(`${this.baseUrl}todos`).pipe(
      retry(2)
    );
  }

  todoChecked(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.patch<TodoItem>(`${this.baseUrl}todos/${item.id}`, { done: !item.done });
  }

  deleteTodo(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.delete<TodoItem>(`${this.baseUrl}todos/${item.id}`);
  }

  saveTodo(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(`${this.baseUrl}todos`, item);
  }

  updateTodo(item: TodoItem): Observable<TodoItem> {
    return this.httpClient.put<TodoItem>(`${this.baseUrl}todos/${item.id}`, item);
  }

}
