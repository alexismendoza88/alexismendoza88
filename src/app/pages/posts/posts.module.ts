import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';

import { TimeAgoPipe } from '../../time-ago.pipe';
import { LongPressModule } from 'ionic-long-press';
@NgModule({
  imports: [
    LongPressModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule
  ],
  declarations: [PostsPage,TimeAgoPipe]
})
export class PostsPageModule {}
