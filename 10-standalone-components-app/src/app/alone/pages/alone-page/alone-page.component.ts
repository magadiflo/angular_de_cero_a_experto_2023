import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [NgIf, CounterAloneComponent, SideMenuComponent,],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
