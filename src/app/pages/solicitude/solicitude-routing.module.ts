import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudePage } from './solicitude.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudePageRoutingModule {}
