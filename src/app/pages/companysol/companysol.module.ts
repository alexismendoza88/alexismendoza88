import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanysolPageRoutingModule } from './companysol-routing.module';

import { CompanysolPage } from './companysol.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { LongPressModule } from 'ionic-long-press';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanysolPageRoutingModule,
    LongPressModule
  ],
  declarations: [CompanysolPage,TimeAgoPipe]
})
export class CompanysolPageModule {}
