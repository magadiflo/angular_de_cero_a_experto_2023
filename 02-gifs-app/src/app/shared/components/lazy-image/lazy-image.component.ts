import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent {

  @Input({ alias: 'url', required: true }) url!: string;
  @Input({ alias: 'alt' }) alt: string = 'No Title!';

  public hasLoaded: boolean = false;

  onLoad(): void {
    console.log('Image loaded: ' + this.alt);
    this.hasLoaded = true;
  }

}
