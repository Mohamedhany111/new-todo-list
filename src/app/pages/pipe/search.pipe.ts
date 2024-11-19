import { Pipe, PipeTransform } from '@angular/core';
import { TodoType } from '../../interfaces/todo.type';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(todo:TodoType[],search:string):TodoType[] {
    if (!search || !todo) {
      return todo;
    }
    const searchLower = search.toLowerCase(); 
    return todo.filter((el) =>
      el.title.toLowerCase().includes(searchLower)
    );
  }
  }

