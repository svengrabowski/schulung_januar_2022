import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
})
export class ValidationMessageComponent implements OnInit {

  @Input() control: AbstractControl | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
