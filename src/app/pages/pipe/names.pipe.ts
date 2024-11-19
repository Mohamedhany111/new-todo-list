import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'names',
  standalone: true,
  pure:true,
})
export class NamesPipe implements PipeTransform {
allData!:string
  transform(value:string,index:number ):string {
  const allData  = `${value}-${index}`//
    return allData;
  }
}
