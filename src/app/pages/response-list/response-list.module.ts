import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponseListPageRoutingModule } from './response-list-routing.module';

import { ResponseListPage } from './response-list.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { LongPressModule } from 'ionic-long-press';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponseListPageRoutingModule,
    LongPressModule
  ],
  declarations: [ResponseListPage,TimeAgoPipe]
})
export class ResponseListPageModule {}
