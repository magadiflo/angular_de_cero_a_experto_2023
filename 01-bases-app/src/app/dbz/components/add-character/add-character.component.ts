import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {

  public character: Character = this._resetForms();
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    if (this.character.name == '' || this.character.power < 0) return;

    this.newCharacter.emit({...this.character});
    this.character = this._resetForms();
  }

  private _resetForms(): Character {
    return { id: '', name: '', power: 0 };
  }

}
