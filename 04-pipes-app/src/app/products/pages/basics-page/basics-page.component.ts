import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  nameLower: string = 'martín';
  nameUpper: string = 'MARTÍN';
  fullName: string = 'mARtíN díaZ';

  customDate: Date = new Date();

}
