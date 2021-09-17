import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudelistPageRoutingModule } from './solicitudelist-routing.module';

import { SolicitudelistPage } from './solicitudelist.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { LongPressModule } from 'ionic-long-press';
@NgModule({
  imports: [
    LongPressModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudelistPageRoutingModule
  ],
  declarations: [SolicitudelistPage,TimeAgoPipe]
})
export class SolicitudelistPageModule {}
