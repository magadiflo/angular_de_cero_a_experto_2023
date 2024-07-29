import { Pipe, PipeTransform } from '@angular/core';

interface Category {
  [key: string]: string;
}

@Pipe({
  name: 'categoryIcon'
})
export class CategoryIconPipe implements PipeTransform {

  transform(value: string): string {
    return this.categories()[value];
  }

  categories(): Category {
    return {
      'Accessories': 'pi-user',
      'Fitness': 'pi-thumbs-up-fill',
      'Clothing': 'pi-reddit',
      'Electronics': 'pi-android',
    }
  }

}
