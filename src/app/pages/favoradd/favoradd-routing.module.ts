import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoraddPage } from './favoradd.page';

const routes: Routes = [
  {
    path: '',
    component: FavoraddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoraddPageRoutingModule {}
