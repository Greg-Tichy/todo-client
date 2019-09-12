import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoChangeComponent } from './todo-change/todo-change.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'add', component: TodoAddComponent },
  { path: 'change', component: TodoChangeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
