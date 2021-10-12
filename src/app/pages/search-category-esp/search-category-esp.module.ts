import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCategoryEspPageRoutingModule } from './search-category-esp-routing.module';

import { SearchCategoryEspPage } from './search-category-esp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCategoryEspPageRoutingModule
  ],
  declarations: [SearchCategoryEspPage]
})
export class SearchCategoryEspPageModule {}
