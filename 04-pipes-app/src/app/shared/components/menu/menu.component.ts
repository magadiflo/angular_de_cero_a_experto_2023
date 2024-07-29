import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ['/basics']
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: ['/numbers']
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['/uncommon']
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro pipe',
            icon: 'pi pi-flag',
            routerLink: ['/custom']
          }
        ]
      },
      {
        label: 'Custom pipes (Web medium)',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-flag',
            routerLink: ['/custom-pipes']
          }
        ]
      },
    ];
  }
}
