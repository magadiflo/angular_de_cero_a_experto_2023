import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, isUpperCase: boolean = false): string {
    return isUpperCase ? value.toUpperCase() : value.toLowerCase();
  }

}
