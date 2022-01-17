import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialComponent } from './components/special/special.component';



@NgModule({
  declarations: [
    SpecialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpecialComponent
  ]
})
export class TestModule { }
