import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return ;
    // filterBy ? value.filter((data: any[]) => data.user.Name.toLocaleLowerCase().indexof(filterBy) !== -1) : value;
  }

}
