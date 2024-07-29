import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public price: number = 0;
  private _subscription$?: Subscription;

  ngOnInit(): void {
    console.log('Componente hijo: ngOnInit');
    this._subscription$ = interval(1000)
      .subscribe(console.log)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo: ngOnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('Componente hijo: ngOnDestroy');
    this._subscription$?.unsubscribe();
  }

}
