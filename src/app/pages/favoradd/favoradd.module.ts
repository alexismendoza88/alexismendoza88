import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoraddPageRoutingModule } from './favoradd-routing.module';

import { FavoraddPage } from './favoradd.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FavoraddPageRoutingModule
  ],
  declarations: [FavoraddPage]
})
export class FavoraddPageModule {}
