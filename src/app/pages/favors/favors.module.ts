import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavorsPageRoutingModule } from './favors-routing.module';

import { FavorsPage } from './favors.page';

import { TimeAgoPipe } from '../../time-ago.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavorsPageRoutingModule
  ],
  declarations: [FavorsPage,TimeAgoPipe]
})
export class FavorsPageModule {}
