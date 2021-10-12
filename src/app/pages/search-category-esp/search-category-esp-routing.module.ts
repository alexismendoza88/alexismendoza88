import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCategoryEspPage } from './search-category-esp.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCategoryEspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCategoryEspPageRoutingModule {}
