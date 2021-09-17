import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitiesPageRoutingModule } from './activities-routing.module';

import { ActivitiesPage } from './activities.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitiesPageRoutingModule
  ],
  declarations: [ActivitiesPage,TimeAgoPipe]
})
export class ActivitiesPageModule {}
