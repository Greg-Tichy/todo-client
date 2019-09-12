import { Component, OnInit } from '@angular/core';

import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo-change',
  templateUrl: './todo-change.component.html',
  styleUrls: ['./todo-change.component.css']
})
export class TodoChangeComponent implements OnInit {
  todoItems: TodoItem[] = [];

  constructor(private service: TodoService) { }

  AnyPending() {
    return this.todoItems.find(t => !t.isCompleted);
  }

  Change(item: TodoItem) {
    console.log('change of ' + item.id);
    item.isCompleted = true;
    this.service.ChangeItem(item).subscribe(
      data => {},
      error => console.error(error)
    );
  }

  ngOnInit() {
    this.service.GetData().subscribe(
      data => {
        data.forEach(item => {
          if (!item.isCompleted) {
            this.todoItems.push(item);
          }
        });
        },
      error => console.error(error)
    );
  }
}
