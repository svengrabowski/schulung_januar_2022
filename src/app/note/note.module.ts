import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from './components/note-list/note-list.component';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { SecondCompComponent } from './components/second-comp/second-comp.component';
import { NoteRoutingModule } from './note-routing.module';



@NgModule({
  declarations: [
    NoteListComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
  ], 
  exports: [
    NoteListComponent,
  ]
})
export class NoteModule { }
