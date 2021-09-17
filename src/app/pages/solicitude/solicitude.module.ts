import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudePageRoutingModule } from './solicitude-routing.module';

import { SolicitudePage } from './solicitude.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudePageRoutingModule,
    AutoCompleteModule
  ],
  declarations: [SolicitudePage]
})
export class SolicitudePageModule {}
