import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { BusyService } from '../../services/busy.service';


@Component({
  selector: 'app-resetpassup',
  templateUrl: './resetpassup.page.html',
  styleUrls: ['./resetpassup.page.scss'],
})
export class ResetpassupPage implements OnInit {
  code:string='';
  passWord:string='';
  working:boolean=false;
  confirm:string='';
  constructor(public apiService:ApiService,public router:Router,public busyService:BusyService) { }

  ngOnInit() {
  }
  async send(){
    if(this.confirm!=this.passWord)
    {
      await  this.busyService.presentAlert("¡Información!","La clave y confirmar clave no son iguales");
      return;
    } 
  this.working=true;
   this.apiService.Post({id:localStorage.getItem("resetid"),passWord:this.passWord,code:this.code},"Users/VeirfyCode").then(res=>{
    this.working=false;
    if(res.ok)
      {
        this.busyService.presentAlert("¡Información!",res.message);
        this.router.navigate(['/login']);
      }else
      {
         this.busyService.presentAlert("¡Información!",res.message);
      }
   },err=>{
    this.working=false;
   });
  }
}
