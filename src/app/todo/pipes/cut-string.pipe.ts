import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string, lenght: number = 10): string {
    if (value.length > length) {
      return `${value.substring(0, lenght)}...`
    }
    return value;
  }

}
