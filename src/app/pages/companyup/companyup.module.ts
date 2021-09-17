import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyupPageRoutingModule } from './companyup-routing.module';

import { CompanyupPage } from './companyup.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CompanyupPageRoutingModule
  ],
  declarations: [CompanyupPage]
})
export class CompanyupPageModule {}
