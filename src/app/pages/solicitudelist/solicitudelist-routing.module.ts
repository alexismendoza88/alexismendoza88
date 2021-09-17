import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudelistPage } from './solicitudelist.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudelistPageRoutingModule {}
