import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string, limit: number): String {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}...`;
  }

}
