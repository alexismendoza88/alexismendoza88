import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpassupPageRoutingModule } from './resetpassup-routing.module';

import { ResetpassupPage } from './resetpassup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpassupPageRoutingModule
  ],
  declarations: [ResetpassupPage]
})
export class ResetpassupPageModule {}
