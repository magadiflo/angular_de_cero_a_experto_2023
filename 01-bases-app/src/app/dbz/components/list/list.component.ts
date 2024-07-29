import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input({ alias: 'characters', required: true }) characters!: Character[];
  @Output() emitCharacterToDeleteEvent: EventEmitter<string> = new EventEmitter();

  emitCharacterToDelete(id: string): void {
    this.emitCharacterToDeleteEvent.emit(id);
  }

}
