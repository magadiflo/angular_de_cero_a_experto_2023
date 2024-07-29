import { Component } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public get gifs(): Gif[] {
    return this._gifsService.gifList;
  }

  constructor(private _gifsService: GifsService) { }

}
