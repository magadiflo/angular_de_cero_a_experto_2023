import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

interface MenuItem {
  name: string;
  route: string;
}


@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/zoom-range', name: 'ZoomRange' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
    { route: '/alone', name: 'Alone Page' },
  ];

}
