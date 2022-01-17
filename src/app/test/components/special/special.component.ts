import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
})
export class SpecialComponent extends BaseComponent implements OnInit {

  public specialMessage: string = 'Hello from special component'

  constructor() {
    super();
  }

  override ngOnInit(): void {
      this.message = "Not from base component"
  }
}
