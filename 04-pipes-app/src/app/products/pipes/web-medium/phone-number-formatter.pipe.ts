import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormatter'
})
export class PhoneNumberFormatterPipe implements PipeTransform {

  transform(value: string): string {
    const cleanValue = value ? value.trim() : '';
    switch (cleanValue.length) {
      case 9:
        return `${cleanValue.slice(0, 3)}-${cleanValue.slice(3)}`;
      case 11:
        return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 5)}-${cleanValue.slice(5)}`;
      default:
        return value;
    }
  }

}
