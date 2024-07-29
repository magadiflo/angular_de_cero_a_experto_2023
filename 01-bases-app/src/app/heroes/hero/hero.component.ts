import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;
  public isActiveName: boolean = true;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.isActiveName = false;
  }

  changeAge(): void {
    this.age = 34;
  }

  resetValues(): void {
    this.name = 'Ironman';
    this.age = 45;
    this.isActiveName = true;
  }

}
