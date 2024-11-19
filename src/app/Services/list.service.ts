import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoType } from '../interfaces/todo.type';
interface ITodoUpdateResponse {
  body: TodoType;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private _http: HttpClient) {}

  showData(): Observable<TodoType[]> {
    return this._http.get<TodoType[]>(
      `https://jsonplaceholder.typicode.com/todos`
    );
  }
  updateData(id: number, body: TodoType) {
    return this._http.put<ITodoUpdateResponse>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { body }
    );
  }
  postData(userData: TodoType): Observable<TodoType> {
    return this._http.post<TodoType>(
      'https://jsonplaceholder.typicode.com/todos',
      userData
    );
  }
}
