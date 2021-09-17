import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostdetailPageRoutingModule } from './postdetail-routing.module';

import { PostdetailPage } from './postdetail.page';
import { TimeAgoPipe } from '../../time-ago.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostdetailPageRoutingModule
  ],
  declarations: [PostdetailPage,TimeAgoPipe]
})
export class PostdetailPageModule {}
