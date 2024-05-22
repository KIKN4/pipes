import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true,
})
export class WrapFnPipe implements PipeTransform {
  transform(value: (key: string) => any, searchKey: string): any {
    return value(searchKey);
  }
}
