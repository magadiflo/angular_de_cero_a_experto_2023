import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [NgClass],
  template: `
  <section [ngClass]="['w-full', 'h-[600px]', cssClass]">
    Heavy Loader Slow
  </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  /**
   * No debemos hacer bloqueante, deberíamos usar una promesa, etc. pero
   * para el ejemplo lo haremos bloqueante.
   *
   * Este componente hará la de un componente bloqueante, súper pesado. La
   * idea es que cuando se llame a este componente se haga un proceso que
   * bloquee todo (no deberíamos hacer eso en la vida real, pero para el ejemplo lo haremos)
   */

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) { }

    console.log('Cargado...');
  }

}
