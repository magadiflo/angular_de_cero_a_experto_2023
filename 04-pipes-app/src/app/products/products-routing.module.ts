import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basics', component: BasicsPageComponent, },
      { path: 'numbers', component: NumbersPageComponent, },
      { path: 'uncommon', component: UncommonPageComponent, },
      { path: 'custom', component: OrderComponent, },
      { path: 'custom-pipes', component: CustomPipesComponent, },
      { path: '**', redirectTo: 'basics' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
