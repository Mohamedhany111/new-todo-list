import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoType } from './interfaces/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  private readonly todoForUpdate =new BehaviorSubject<TodoType |null>(null)
  readonly todoForUpdate$ = this.todoForUpdate.asObservable()
  setTodo(filter: TodoType | null) {
    this.todoForUpdate.next(filter)
  }
  private readonly updatedTodoSubject = new BehaviorSubject<TodoType | null>(null);
  readonly updatedTodo$ = this.updatedTodoSubject.asObservable();

  updatedTodo(filter: TodoType | null) {
    this.updatedTodoSubject.next(filter);
  }
}
