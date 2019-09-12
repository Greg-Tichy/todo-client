import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  public GetData() {
    return this.http.get<TodoItem[]>('/api/todo');
  }

  public AddItem(item: TodoItem) {
    return this.http.post('api/todo', item);
  }

  public ChangeItem(item) {
    return this.http.put('api/todo/' + item.id, item);
  }
}

export interface TodoItem {
  Id: number;
  description: string;
  isCompleted: boolean;
}
