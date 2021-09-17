import { Component, EventEmitter, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.page.html',
  styleUrls: ['./response-list.page.scss'],
})
export class ResponseListPage implements OnInit {
  items:any=[];
  working:boolean=false;
  selecctedItems=[];
  constructor(public apiService:ApiService,public router:Router,public busyService:BusyService) { }
  ngOnInit() {
 
  }
  ionViewWillEnter(){
   this.solicitudes();
  }
  detail(id){
    window.localStorage.removeItem("responseId")
    window.localStorage.setItem("responseId",id);
    this.router.navigate(['/response-detail']);
  }
  pressed(item){
    var exits= this.selecctedItems.filter(s=> s.id== item.id)
    if(exits.length ==0){
      this.selecctedItems.push(item);
      var myDiv = document.getElementById(item.id);
      myDiv.classList.add("item-background-color");
    }
  }
  click(item){
    var exits= this.selecctedItems.filter(s=> s.id== item.id)
    if(exits.length > 0){
      this.selecctedItems=this.selecctedItems.filter(s=> s.id!= item.id);
      var myDiv = document.getElementById(item.id);
      myDiv.classList.remove("item-background-color");
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
    this.apiService.Post(this.selecctedItems,"Responses/DeleteList").then(res=>{
      this.working=true;
      this.selecctedItems=[];
      this.solicitudes();
    },err=>{
      this.working=false;
      this.busyService.presentAlert("¡Información!","Algo salió mal, intente de nuevo");
    });
  }
}
detailsol(){

  this.router.navigate(['/solicitude-detail']);
}
  solicitudes(){
    this.items=[];
    this.working=true;
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.apiService.Get("Responses/ResponsesCustomer/" + userinfo.id + "/"  + window.localStorage.getItem("solicitudeId") ).then(async res=>{
      this.working=false;
      this.items=res;
    },err=>{
      this.working=false;
    });
  }
}
