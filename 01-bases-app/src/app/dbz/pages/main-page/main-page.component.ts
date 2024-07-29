import { Component } from '@angular/core';

import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  public get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  constructor(private _dbzService: DbzService) { }

  addCharacter(character: Character): void {
    this._dbzService.addCharacter(character);
  }

  characterToDeleteById(id: string): void {
    this._dbzService.characterToDeleteById(id);
  }

}
