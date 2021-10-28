import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RematesPageRoutingModule } from './remates-routing.module';

import { RematesPage } from './remates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RematesPageRoutingModule
  ],
  declarations: [RematesPage]
})
export class RematesPageModule {}
