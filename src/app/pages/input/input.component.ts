import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ListService } from '../../Services/list.service';
import { Subscription } from 'rxjs';
import { TodoService } from '../../todo.service';
import { TodoType } from '../../interfaces/todo.type';
import { CommonModule, JsonPipe } from '@angular/common';
JsonPipe
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  myForm = new FormGroup({
    completed: new FormControl(),
    id: new FormControl(),
    userId: new FormControl(),
    title: new FormControl('', { nonNullable: true }),
  });
  id!: number;
  user!: TodoType;
  sub!: Subscription;
  changeStatus!: Boolean;
  isUpdate:boolean=false
  @Output() dataEvent = new EventEmitter<TodoType>();
  @Output() dataUpdated = new EventEmitter<TodoType>();
  constructor(private _list: ListService, private _todo: TodoService) {
    this.sub = this._todo.todoForUpdate$.subscribe((todo) => {
      if (!todo) return;
      this.myForm.patchValue(todo);
      this.isUpdate = true
    });
  }
  ngOnInit(): void {

  }

  update() {
    const todo = this.myForm.getRawValue();
    this._todo.updatedTodo(todo);
    this.myForm.reset();
    this.isUpdate = false;

    this.dataUpdated.emit(todo);
  }
  post() {
    this._list.postData(this.myForm.getRawValue()).subscribe((res) => {
      this.dataEvent.emit(res);
    });
    this.myForm.reset()
  }
  reset() {
    this.myForm.reset();
  }


}
