import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[];
public shallHide = true;

  onMouseOver(e) {
    this.shallHide = false;
    e.currentTarget.style.backgroundColor = 'lightgrey';
    e.currentTarget.style.color = 'yellow';
  }
  onMouseLeave(e) {
    this.shallHide = true;
    e.currentTarget.style.backgroundColor = null;
    e.currentTarget.style.color = null;
  }
  constructor(private service: TodoService) {}

  AnyCompleted() {
    return this.todoItems.find( t => t.isCompleted);
  }

  AnyPending() {
    return this.todoItems.find( y => !y.isCompleted);
  }

  ngOnInit() {
    this.service.GetData().subscribe(
      data => this.todoItems = data,
      error => console.error(error)
    );
  }
}
