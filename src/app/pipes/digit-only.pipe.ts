import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitOnly'
})
export class DigitOnlyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/[^0-9]/g,'');
  }

}
