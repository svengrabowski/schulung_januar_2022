import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IdGuardGuard } from './guards/id-guard.guard';
import { FirstCompComponent } from './note/components/first-comp/first-comp.component';
import { NoteListComponent } from './note/components/note-list/note-list.component';
import { SecondCompComponent } from './note/components/second-comp/second-comp.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';

const routes: Routes = [
  { path: "todo", component: TodoListComponent },
  { path: "note", loadChildren: () => import('./note/note.module').then(m => m.NoteModule) },
  { path: "", redirectTo: "todo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
