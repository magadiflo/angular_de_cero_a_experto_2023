import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild("search") search!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) { }

  searchTag(): void {
    this._gifsService.searchTag(this.search.nativeElement.value);
    this.search.nativeElement.value = '';
  }

}
