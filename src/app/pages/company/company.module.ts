import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyPageRoutingModule } from './company-routing.module';

import { CompanyPage } from './company.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    AutoCompleteModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyPageRoutingModule
  ],
  declarations: [CompanyPage]
})
export class CompanyPageModule {}
