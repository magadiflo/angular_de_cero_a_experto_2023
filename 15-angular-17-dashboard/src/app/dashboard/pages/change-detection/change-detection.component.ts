import { JsonPipe } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy, computed } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush, //Se recomienda usar el ChangeDetection con los signals para mejorar el rendimiento
  template: `
  <app-title [title]="currentFramework()"/>
  <pre> {{ frameworkAsSignal() | json }}</pre>
  <pre> {{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React',
      }));
    }, 3000);
  }

}
