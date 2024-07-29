import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * El <ng-content /> permite colocar elementos desde el padre, es decir,
 * los elementos que vamos a colocar desde el padre, lo colocaremos justamente
 * en donde está la etiqueta <ng-content />
 */

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [NgClass],
  template: `
  <section [ngClass]="['w-full', cssClass]">
    <ng-content />
  </section>
  `,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast Created');
  }

}
