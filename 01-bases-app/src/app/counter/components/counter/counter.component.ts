import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button type="button" (click)="increaseBy(+5)">+5</button>
    <button type="button" (click)="resetCounter()">Reset</button>
    <button type="button" (click)="increaseBy(-5)">-5</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
