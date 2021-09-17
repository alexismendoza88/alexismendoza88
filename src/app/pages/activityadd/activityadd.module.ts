import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityaddPageRoutingModule } from './activityadd-routing.module';

import { ActivityaddPage } from './activityadd.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityaddPageRoutingModule
  ],
  declarations: [ActivityaddPage]
})
export class ActivityaddPageModule {}
