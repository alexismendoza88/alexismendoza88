import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyupPage } from './companyup.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyupPageRoutingModule {}
