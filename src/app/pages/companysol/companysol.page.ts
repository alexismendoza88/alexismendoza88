import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-companysol',
  templateUrl: './companysol.page.html',
  styleUrls: ['./companysol.page.scss'],
})
export class CompanysolPage implements OnInit {

  items:any=[];
  working:boolean=false;
  selecctedItems=[];
  color:string='white';
  color2:string='white';
  color3:string='white';
  constructor(public menuController:MenuController, public apiService:ApiService,public router:Router,public busyService:BusyService) { }

  ngOnInit() {
    this.menuController.enable(true);
  }
  ionViewWillEnter(){
   this.solicitudes();
  }
  detail(id){
    window.localStorage.removeItem("solicitudeId")
    window.localStorage.setItem("solicitudeId",id);
    this.router.navigate(['/solicitude-detail']);
  }
  response(item:any){
    if(item.responses.length > 0)
    {
      window.localStorage.removeItem('responseId');
      window.localStorage.setItem('responseId',item.responses.reverse()[0].id);
      this.router.navigate(['/response-detail']);
    }
    else
    {
      window.localStorage.removeItem('solicitudeId');
      window.localStorage.setItem('solicitudeId',item.id);
      this.router.navigate(['/response']);
    }
  }
  filter(e:string)
  {
      localStorage.removeItem("filter");
      localStorage.setItem("filter",e);
      this.solicitudes();
  }
  solicitudes(){
    let filter="f1";
    if(window.localStorage.getItem("filter")!=null)
    {
      filter=window.localStorage.getItem("filter"); 
    }
    this.color='white';
    this.color2='white';
    this.color3='white';
    if(filter=="f1")
    {
      this.color='yellow';
    }
    else if(filter=="f2")
    {
      this.color2='yellow';
    }
    else
    {
      this.color3='yellow';
    }
    this.items=[];
    this.working=true;
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    console.log(window.localStorage.getItem("userinfo"));
    this.apiService.Get("Solicitudes/CompanySolicitude/" + userinfo.id +"/" + userinfo.provinceId+ "/"+ filter).then(async res=>{
      this.working=false;
      this.items=res;
    },err=>{
      this.working=false;
    });
  }
}
