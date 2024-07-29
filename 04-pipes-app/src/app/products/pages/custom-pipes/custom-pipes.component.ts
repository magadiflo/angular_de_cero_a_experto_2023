import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  //* 1. Uppercase First Pipe
  public phrase = 'tengo EL ORGULLO DE ser Peruano Y Soy FeliZ.';

  //* 2. Reverse String Pipe
  public course = 'Angular';

  //* 3. Filter Array Pipe
  public products: Product[] = [];

  //* 4. Truncate Text Pipe
  public text = 'This is a long text that should be truncated';

  //* 5. Sort Array Pipe

  //* 6. Currency Convert Pipe
  public salary = 100;

  //* 7. Phone Number Formatter Pipe
  public phone = '51943859678';

  //* 8. File Size Pipe
  public fileSize = 1124;

  //* 9. Percent Change Pipe
  public currentValue = 150;

  //* 10. Strip HTML Tags Pipe
  public textWithHtml = '<p>Este es texto con <b>HTML</b> incluído será extraído</p>';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(data => {
        this.products = data;
      });
  }

}
