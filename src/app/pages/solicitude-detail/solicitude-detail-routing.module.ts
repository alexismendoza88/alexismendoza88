import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudeDetailPage } from './solicitude-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudeDetailPageRoutingModule {}
