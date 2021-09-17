import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpassupPage } from './resetpassup.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpassupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpassupPageRoutingModule {}
