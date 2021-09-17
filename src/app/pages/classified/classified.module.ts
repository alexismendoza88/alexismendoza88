import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassifiedPageRoutingModule } from './classified-routing.module';

import { ClassifiedPage } from './classified.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassifiedPageRoutingModule
  ],
  declarations: [ClassifiedPage,TimeAgoPipe]
})
export class ClassifiedPageModule {}
