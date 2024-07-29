import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public isUpperCase: boolean = false;
  public products: Product[] = [];
  public orderBy: keyof Product | '' = '';

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .then((data) => {
        this.products = data;
      });
  }

  changeOrder(propery: keyof Product): void {
    this.orderBy = propery;
  }

}
