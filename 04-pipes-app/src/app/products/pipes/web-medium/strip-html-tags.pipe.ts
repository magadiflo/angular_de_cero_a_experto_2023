import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.replace(/<[^>]*>/g, '');;
  }

}
