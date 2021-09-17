import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassifiedaddPage } from './classifiedadd.page';

const routes: Routes = [
  {
    path: '',
    component: ClassifiedaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassifiedaddPageRoutingModule {}
