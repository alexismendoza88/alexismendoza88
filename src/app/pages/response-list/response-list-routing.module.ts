import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponseListPage } from './response-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResponseListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponseListPageRoutingModule {}
