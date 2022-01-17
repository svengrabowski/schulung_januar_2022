import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-from-reactive',
  templateUrl: './todo-from-reactive.component.html',
})
export class TodoFromReactiveComponent implements OnInit {

  private _todo: TodoItem | null = null;

  @Output() todoSubmitted = new EventEmitter<TodoItem>();
  @Output() todoEdited = new EventEmitter<TodoItem>();

  @Input() public set todo(value: TodoItem) {
    this._todo = { ...value };
    this.updateForm();
  }

  public todoForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.todoForm = this.fb.group({
      title: [this._todo?.title, [Validators.required, Validators.minLength(5)]],
      description: [this._todo?.description, Validators.required],
      dueDate: this._todo?.dueDate, 
    });
  }

  isNewItem(): boolean {
    return !this._todo?.id;
  } 

  ngOnInit(): void {
  }

  updateForm() {
    this.todoForm.setValue({
      title: this._todo?.title,
      description: this._todo?.description,
      dueDate: this._todo?.dueDate ? this._todo?.dueDate : null
    });
  }

  onSubmit(): void {
    const item = {
      ...this.todoForm.value,
      id: this._todo?.id ? this._todo?.id : null,
      done: false
    }
    if (this.isNewItem()) {
      this.todoSubmitted.emit(item);
    } else {
      this.todoEdited.emit(item);
    }
    this.todoForm.reset();
  }
}
