import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'objToArray',
})
export class objectToArrayPipe implements PipeTransform {
  transform(object: any = []): any {
    return Object.values(object);
  }
}
