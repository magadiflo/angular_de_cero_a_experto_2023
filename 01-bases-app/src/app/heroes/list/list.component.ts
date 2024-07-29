import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
