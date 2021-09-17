import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityaddPage } from './activityadd.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityaddPageRoutingModule {}
