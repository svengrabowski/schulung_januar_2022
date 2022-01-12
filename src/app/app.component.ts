import { Component } from '@angular/core';
import { TodoService } from './todo/services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  /*
  constructor(private todoService: TodoService) {
    this.todoService.getAllTodos().subscribe((data) => console.log(data));
  }
  */

}
