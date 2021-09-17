import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { BusyService } from '../../services/busy.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {
  mail:string='';
  working:boolean=false;
  constructor(public apiService:ApiService,public router:Router,public busyService:BusyService) { }

  ngOnInit() {
  }
   send(){
  this.working=true;
   this.apiService.Get("Users/SendCode/" + this.mail).then(res=>{
    this.working=false;
    console.log(res);
      if(res.ok)
      {
        this.busyService.presentAlert("¡Información!",res.message);
        localStorage.removeItem("resetid");
        localStorage.setItem("resetid",res.id);
        this.router.navigate(['/resetpassup']);
      }else
      {
         this.busyService.presentAlert("¡Información!",res.message);
      }
   },err=>{
    this.working=false;
   });
  }
}
