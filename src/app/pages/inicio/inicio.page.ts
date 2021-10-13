import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit,OnInit {

  constructor(public router:Router,private busyService:BusyService, private apiService:ApiService) { }
  result:string='....';
  ngOnInit() {

  }
  ngAfterViewInit(){
    var texto = "";
    var ahora=new Date(); 
    var hora=ahora.getHours();
   
    if(hora>=0 && hora<12){
      texto="Hola, Buenos Días.";
    }
    else if (hora>=12 && hora<18){
      texto="Hola, Buenas Tardes.";
    }
    else{
      texto="Hola, Buenas Noches.";
    }
    this.result = texto;

  }
  customer(){
    window.localStorage.removeItem("iscustomer");
    window.localStorage.setItem("iscustomer","si");
    this.router.navigate(['/customer']);
  }
  
  company()
  {
    window.localStorage.removeItem("iscustomer");
    window.localStorage.setItem("iscustomer","no");
    this.router.navigate(['/company']);
  }  

  iniciar_sesion()
  {
    window.localStorage.removeItem("iscustomer");
    window.localStorage.setItem("iscustomer","no");
    this.router.navigate(['/login']);
  }  
  ionViewWillEnter(){
    this.autologin();
  }
  async  autologin()
  {
    // alert(localStorage.getItem("notifications"));
    var userinfo=    window.localStorage.getItem("userinfo");
    if(userinfo!=null)
    {
      
      if (localStorage.getItem("notifications")=="true"){

        
       var res= await this.busyService.presentAlertYesNo("¡Notificaciones desaptivadas!","desea activar las notificaciones");
       if(res){
        localStorage.removeItem("notifications");
        this.apiService.Get("Companies/activar_notificaciones/"+ JSON.parse(userinfo).id);
      
       }
       
      }
      var data= JSON .parse(window.localStorage.getItem("userinfo"));
      if(data.role=="Customer")
      {
        document.getElementById("pedidos").style.display = 'none';
        this.router.navigate(['/solicitudelist']);
      }
      else
      {
        this.router.navigate(['/companysol']);
      } 
  }
  }

}
