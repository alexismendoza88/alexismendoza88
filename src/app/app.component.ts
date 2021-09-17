import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { FCM } from '@ionic-native/fcm/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BusyService } from './services/busy.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  splash = true;
 public appPages=[];
  constructor(
    private menuController:MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm :FirebaseMessaging,
    private router:Router,
    private busyService:BusyService
  ) {
    this.initializeApp();
    this.getPages();
    
    setTimeout(() => {
      this.splash = false;
    }, 3090);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.ontoken();
      this.fcm.onTokenRefresh().subscribe(token => {
        this.ontoken();
        this.router.navigate(['/home']); 
      });
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    });
  }
  ontoken()
  {
    this.fcm.getToken().then(async token=>{
      window.localStorage.removeItem("msToken");
      window.localStorage.setItem("msToken",token);
    });

  }
  notifications(){
    this.fcm.onBackgroundMessage().subscribe(data => {
      if(data.wasTapped)
      {
        if(data.a=='customer'){
          window.localStorage.removeItem("solicitudeId")
          window.localStorage.setItem("solicitudeId",data.id);
          this.router.navigate(['/solicitude-detail']);
        }
        else
        {
          window.localStorage.removeItem("responseId")
          window.localStorage.setItem("responseId",data.id);
          this.router.navigate(['/response-detail']);
        }     
      } 
    });
    this.fcm.onMessage().subscribe(data => {
      if(data.wasTapped)
      {
        if(data.a=='customer'){
          window.localStorage.removeItem("solicitudeId")
          window.localStorage.setItem("solicitudeId",data.id);
          this.router.navigate(['/solicitude-detail']);
        }
        else
        {
          window.localStorage.removeItem("responseId")
          window.localStorage.setItem("responseId",data.id);
          this.router.navigate(['/response-detail']);
        }     
      } 
    });
  }
  getPages() {
    this.appPages= [
      {
        title: 'Inicio',
        url: 'home',
        icon: 'home',
        available:true
      },
      {
        title: 'Pedidos',
        url: null,
        icon: 'notifications',
        available:true
      },
      {
        title: 'Solicitudes',
        url: null,
        icon: 'cart',
        available:true
      },      
      /*
      {
        title: 'Actvidades y Promociones',
        url: '/activities',
        icon: 'fast-food',
        available:true
      },
      {
        title: 'Clasificados',
        url: 'classified',
        icon: 'newspaper',
        available:true
      },
      {
        title: 'Pedir un Favor',
        url: 'favors',
        icon: 'thumbs-up',
        available:true
      },
      {
        title: 'Editar Publicaciones',
        url: 'posts',
        icon: 'clipboard',
        available:true
      },*/
      {
        title: 'Mi cuenta',
        url: null,
        icon: 'person',
        available:true
      },
      
      {
        title: 'Desarrollador',
        url: '/about',
        icon: 'code-working',
        available:true
      }
    ];

  }
    // Signout Button
    signout() {
      this.router.navigate(['/login']);
      this.menuController.enable(false); // Make Sidemenu disable
    }
    async info()
    {
        await  this.busyService.presentAlert("¡Aviso!","¡Acción Proximamente Disponible!");
    }

    async sol()
    {
      this.router.navigate(['/solicitudelist']);

    }

    async pedidos()
    {
      let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
      if(userinfo.role!="Customer")
      {
        this.router.navigate(['/companysol']);
      } 
    }
    account(){
      let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
      if(userinfo.role=='Company')
      {
        this.router.navigate(['/companyup']); 
      }else
      {
        this.router.navigate(['/customerup']); 
      }
    }
}
