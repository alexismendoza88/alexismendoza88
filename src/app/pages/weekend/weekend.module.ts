import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekendPageRoutingModule } from './weekend-routing.module';

import { WeekendPage } from './weekend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekendPageRoutingModule
  ],
  declarations: [WeekendPage]
})
export class WeekendPageModule {}
