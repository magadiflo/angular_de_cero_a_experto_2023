import { Component } from '@angular/core';

import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public get tagHistory(): string[] {
    return this._gifsService.tagHistory;
  }

  constructor(private _gifsService: GifsService) { }

  searchTag(tag: string): void {
    this._gifsService.searchTag(tag);
  }

}
