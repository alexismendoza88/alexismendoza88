import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudeDetailPageRoutingModule } from './solicitude-detail-routing.module';

import { SolicitudeDetailPage } from './solicitude-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudeDetailPageRoutingModule
  ],
  declarations: [SolicitudeDetailPage]
})
export class SolicitudeDetailPageModule {}
