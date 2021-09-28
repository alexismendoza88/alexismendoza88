import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements AfterViewInit,OnInit {

  constructor(public router:Router) { }
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
  autologin()
  {
    var userinfo=    window.localStorage.getItem("userinfo");
    if(userinfo!=null)
    {
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
