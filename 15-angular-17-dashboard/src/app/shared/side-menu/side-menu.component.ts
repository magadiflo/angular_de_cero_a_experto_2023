import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: `./side-menu.component.scss`
})
export class SideMenuComponent {
  public menuItems = APP_ROUTES
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'));
}
