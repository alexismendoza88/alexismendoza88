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
      texto="Hola, Buenos dias";
    }
    else if (hora>=12 && hora<18){
      texto="Hola, Buenas Tardes";
    }
    else{
      texto="Hola, buenas noches";
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

  

}
