import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
//import { FCM } from '@ionic-native/fcm/ngx';
import { Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  working:boolean=false;
  subscription :any;
  constructor(public apiService:ApiService,public router:Router,public platform: Platform) {

  }
  ngOnInit(){
    this.platform.ready().then(() => {
    
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
