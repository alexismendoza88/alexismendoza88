import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
//import { FCM } from '@ionic-native/fcm/ngx';
import { Platform} from '@ionic/angular';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  working:boolean=false;
  subscription :any;
  constructor(public apiService:ApiService,public router:Router,public fmc:FirebaseMessaging,public platform: Platform) {

  }
  ngOnInit(){
    this.platform.ready().then(() => {
      this.fmc.onBackgroundMessage().subscribe(data => {
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
  });

  this.fmc.onMessage().subscribe(data => {
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
  customer(){
    window.localStorage.removeItem("iscustomer");
    window.localStorage.setItem("iscustomer","si");
    this.router.navigate(['/login']);
  
  }
  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

ionViewWillLeave(){
    this.subscription.unsubscribe();
}
  company()
  {
    window.localStorage.removeItem("iscustomer");
    window.localStorage.setItem("iscustomer","no");
    this.router.navigate(['/login']);
  }
}
