import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanysolPage } from './companysol.page';

const routes: Routes = [
  {
    path: '',
    component: CompanysolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanysolPageRoutingModule {}
