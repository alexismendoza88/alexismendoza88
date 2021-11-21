import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { FCM } from '@ionic-native/fcm/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BusyService } from './services/busy.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  splash = false;
 public appPages=[];
  constructor(
    private menuController:MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseX :FirebaseX,
    private router:Router,
    private busyService:BusyService
  ) {
    this.initializeApp();
    this.getPages();
    setTimeout(() => {
      this.splash = false
    }, 5500);
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.notifications();
    });
  }

  notifications(){

    this.firebaseX.getToken()
  .then(token => {

    window.localStorage.removeItem("msToken");
    window.localStorage.setItem("msToken",token);

  }) // save the token server-side and use it to push notifications to this device
  .catch(error => console.log(error));
  this.onNotificationOpen().subscribe((data :any)=> {
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
    
  });


this.firebaseX.onTokenRefresh()
  .subscribe((token: string) =>{

    window.localStorage.removeItem("msToken");
    window.localStorage.setItem("msToken",token);

  });

  }
  onNotificationOpen() {
    return new Observable(observer => {
          (window as any).FirebasePlugin.onMessageReceived((response) => {
              observer.next(response);
          });
     });
}
  
  getPages() {
    this.appPages= [
      {
        title: 'Inicio',
        url: '/inicio',
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
      
      // {
      //   title: 'Actvidades y Comidas',
      //   url: '/activities',
      //   icon: 'fast-food',
      //   available:true
      // },
      /*
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
        title: 'Categorías',
        url: null,
        icon: 'code-working',
        available:true
      }
      ,
      {
        title: 'Promociones',
        url: null,
        icon: 'code-working',
        available:true
      }
      ,
      {
        title: 'Remates',
        url: null,
        icon: 'code-working',
        available:true
      }
      ,
      {
        title: 'Fechas Especiales',
        url: null,
        icon: 'code-working',
        available:true
      } ,
      {
        title: 'Anuncios',
        url: null,
        icon: 'code-working',
        available:true
      } ,
      {
        title: 'Fin De Semana',
        url: null,
        icon: 'code-working',
        available:true
      },
      
      {
        title: 'Mi cuenta',
        url: null,
        icon: 'person',
        available:true
      },
      {
        title: 'Acerca de QPRICE',
        url: '/about',
        icon: 'code-working',
        available:true
      },
    ];

  }
    // Signout Button
    signout() {
      window.localStorage.removeItem("userinfo");
      this.router.navigate(['/inicio']);
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
    async Categoria()
    {
      this.router.navigate(['/categories']);
    }
    async promociones()
    {
      await  this.busyService.presentAlert("¡Aviso!","¡Acción Promocion Proximamente Disponible!");
      this.router.navigate(['/promotions']);
    }
    async Remates()
    {
      await  this.busyService.presentAlert("¡Aviso!","¡Acción Remates Proximamente Disponible!");
      this.router.navigate(['/remates']);
    }
    async Fechas_Especiales()
    {
      await  this.busyService.presentAlert("¡Aviso!","¡Acción Fechas Especiales Proximamente Disponible!");
      this.router.navigate(['/special']);
    }
    async Anuncios()
    {
      await  this.busyService.presentAlert("¡Aviso!","¡Acción Anuncios Proximamente Disponible!");
      this.router.navigate(['/advertisements']);
    }
    async Fin_Semana()
    {
      await  this.busyService.presentAlert("¡Aviso!","¡Acción Fin De Semana Proximamente Disponible!");
      this.router.navigate(['/weekend']);
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
