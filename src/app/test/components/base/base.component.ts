import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './base.component.html',
})
export abstract class BaseComponent implements OnInit {

  public message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.message = "Hello from base component"
  }

}
