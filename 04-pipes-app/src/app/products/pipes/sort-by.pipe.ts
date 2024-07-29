import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(products: Product[], sortByProperty?: keyof Product | ''): Product[] {
    console.log({products, sortByProperty});

    switch (sortByProperty) {
      case 'name':
        return products.sort((a, b) => (a.name! > b.name!) ? 1 : -1);
      case 'category':
        return products.sort((a, b) => (a.category! > b.category!) ? 1 : -1);
      case 'quantity':
        return products.sort((a, b) => (a.quantity! > b.quantity!) ? 1 : -1);
    }
    return products;
  }

}
0
