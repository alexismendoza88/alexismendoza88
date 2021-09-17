import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassifiedaddPageRoutingModule } from './classifiedadd-routing.module';

import { ClassifiedaddPage } from './classifiedadd.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ClassifiedaddPageRoutingModule
  ],
  declarations: [ClassifiedaddPage]
})
export class ClassifiedaddPageModule {}
