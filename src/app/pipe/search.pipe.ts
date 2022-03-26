import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
     return value;
    }
    console.log(args);
    console.log(value);
    return value.filter((note:any) =>{
      return note.title.toLocaleLowerCase().includes(args) | note.discription.toLocaleLowerCase().includes(args);
      
    })
  }
}