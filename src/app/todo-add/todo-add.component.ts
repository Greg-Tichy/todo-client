import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TodoService, TodoItem } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoForm;

  constructor(private formBuilder: FormBuilder, private service: TodoService) {
    this.todoForm = this.formBuilder.group({
      description: ''
    });
  }
  onSubmit(todoData) {
    if (!todoData.description) {
      console.warn('empty entry igored');
      return;
    }

    const item: TodoItem = {
      Id: 0,
      description: todoData.description,
      isCompleted: false
    };
    let hasError = false;
    this.service.AddItem(item).subscribe(
      _ => console.log('item added'),
      error => {console.error(error); hasError = true; }
    );

    if (!hasError) {
      console.log('New todo item has been added', todoData);
      this.todoForm.reset();
    }
  }

  ngOnInit() {
  }

}
