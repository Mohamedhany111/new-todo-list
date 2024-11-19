import { Component, OnInit } from '@angular/core';
import { ListService } from '../../Services/list.service';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { TodoService } from '../../todo.service';
import { TodoType } from '../../interfaces/todo.type';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../pipe/search.pipe";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule, SearchPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todo!:TodoType[];
  newUserdata!: TodoType;
  index!: number;
  changestatus: boolean = true;
  receivedData!: TodoType;
  numberofId!: number;
  selectedValue!:string
  filter!:TodoType[];
  selected!:string;
  constructor(
    private _list: ListService,
    private _todo: TodoService
  ) {}
  ngOnInit(): void {
    this.showData();
  }
  showData() {
    this._list.showData().subscribe((res) => {
      this.todo = res;
      this.filter = this.todo
     
    });
  }
  Delete(index: number) {
    this.filter.splice(index, 1);
  }
  update(filter: TodoType) {
    this._todo.setTodo(filter);
  }
  dataUpdated(filter: TodoType) {
    this.filter = this.filter.map((a) => (a.id == filter.id ? filter : a));
  }
  receiveTheData(data: TodoType) {
    this.newUserdata = data;
    this.filter.push(this.newUserdata);
  }
  filterData(event: Event) {
    const result = event.target as HTMLSelectElement;
    const value =result.value
    this.selected = value;
    let booleanValue = value==="true"?true:value==="false"?false:null
    if(booleanValue  !== null){
     this.filter = this.todo.filter(item => item.completed === booleanValue);
    }else{
      this.filter = this.todo;
}

    }

  }

