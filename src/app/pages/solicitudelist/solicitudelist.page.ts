import { Component, OnInit,ViewChild} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { MenuController,IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-solicitudelist',
  templateUrl: './solicitudelist.page.html',
  styleUrls: ['./solicitudelist.page.scss'],
})
export class SolicitudelistPage implements OnInit {
  items:any=[];
  working:boolean=false;
  selecctedItems=[];
  color:string='white';
  color2:string='white';
  color3:string='white';
  constructor(public menuController:MenuController,public apiService:ApiService,public router:Router,public busyService:BusyService) { }

  ngOnInit() {
    
    this.menuController.enable(true);
    if(window.localStorage.getItem("pv")==null)
    {
    this.busyService.presentAlert("¡Mensaje Informativo!","En esta sección se mostrarán las solicitudes que usted hará durante el transcurso del día.");  
    }
    window.localStorage.setItem("pv","1");
 
  }
  filter(e:string)
  {
      localStorage.removeItem("filter");
      localStorage.setItem("filter",e);
      this.solicitudes();
  }
  ionViewWillEnter(){    
   this.solicitudes();
  }

  detail(id){
    window.localStorage.removeItem("solicitudeId")
    window.localStorage.setItem("solicitudeId",id);
    this.router.navigate(['/solicitude-detail']);
  }
  responses(id){
    window.localStorage.removeItem("solicitudeId")
    window.localStorage.setItem("solicitudeId",id);
    this.router.navigate(['/response-list']);
  }
  pressed(item){
    var exits= this.selecctedItems.filter(s=> s.id== item.id)
    if(exits.length ==0){
      this.selecctedItems.push(item);
      var myDiv = document.getElementById(item.id);
      myDiv.classList.add("item-background-color");
    }
  }

  cancel(){
    this.selecctedItems.forEach(obj=> 
    {
      var myDiv = document.getElementById(obj.id);
      myDiv.classList.remove("item-background-color");
    });
    this.selecctedItems=[];
  }

  async delete(){
    var yes=await this.busyService.presentAlertYesNo("¡Información!","¿Desea eliminar los ítems seleccionados?");
    if(yes)
    {
      this.working=true;
      this.apiService.Post(this.selecctedItems,"Solicitudes/DeleteList").then(res=>{
      this.working=true;
      this.selecctedItems=[];
      this.solicitudes();
    },err=>{
      this.working=false;
      this.busyService.presentAlert("¡Información!","Algo salió mal, intente de nuevo");
    });
  }
  }

  click(item){
    if(this.selecctedItems.length == 0){
      window.localStorage.removeItem("solicitudeId")
      window.localStorage.setItem("solicitudeId",item.id);
      this.router.navigate(['/response-list']);
    }else{
      var exits= this.selecctedItems.filter(s=> s.id== item.id)
      if(exits.length ==0){
        this.selecctedItems.push(item);
        var myDiv = document.getElementById(item.id);
        myDiv.classList.add("item-background-color");
      }else{
        this.selecctedItems=this.selecctedItems.filter(s=> s.id!= item.id);
        var myDiv = document.getElementById(item.id);
        myDiv.classList.remove("item-background-color");
      }
    }
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
    this.apiService.Get("Solicitudes/CustomerSolicitude/" + userinfo.id + "/"+ filter).then(async res=>{
      this.working=false;
      this.items=res;
    },err=>{
      this.working=false;
    });
  }
}
