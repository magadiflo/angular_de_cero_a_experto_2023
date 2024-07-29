import { Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input({ alias: 'gifs', required: true }) gifs: Gif[] = [];

}
