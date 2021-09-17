import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerupPageRoutingModule } from './customerup-routing.module';

import { CustomerupPage } from './customerup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CustomerupPageRoutingModule
  ],
  declarations: [CustomerupPage]
})
export class CustomerupPageModule {}
