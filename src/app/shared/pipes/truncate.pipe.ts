import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any,limit: number): any {
    if(value.length > limit){
      value = value.substr(0,limit - 3) + '...';
    }
    return value;
  }

}
