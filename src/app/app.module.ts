import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthguardService } from './services/authguard.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { BusyService } from './services/busy.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FCM } from '@ionic-native/fcm/ngx';
import { IonicGestureConfig } from './HammerGestureConfig';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { MapComponent } from './components/map/map.component';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RouteComponent } from './components/route/route.component';

import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@NgModule({
  declarations: [AppComponent,MapComponent,RouteComponent],
  entryComponents: [MapComponent,RouteComponent],
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,AutoCompleteModule],
  providers: [ 
    Geolocation,
    NativeGeocoder,
    CallNumber,
    PhotoViewer,
    FirebaseX,
    //FCM,
    BusyService, 
    ApiService,
    AuthguardService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
