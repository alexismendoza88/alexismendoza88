import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RematesPage } from './remates.page';

const routes: Routes = [
  {
    path: '',
    component: RematesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RematesPageRoutingModule {}
