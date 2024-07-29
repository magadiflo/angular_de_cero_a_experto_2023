import { Injectable } from '@angular/core';

import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Gokú', power: 9500 },
    { id: uuid(), name: 'Yamcha', power: 580 },
  ];

  addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  characterToDeleteById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
