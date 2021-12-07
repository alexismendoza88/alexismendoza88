import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  working:boolean;
  constructor(private router:Router, private formBuilder: FormBuilder,private busyService:BusyService,private apiService:ApiService) { }

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
  ngOnInit() {
    var recordar=true;
    var pass=  window.localStorage.getItem("passwordMoney");
    var mail=  window.localStorage.getItem("emailMoney");
    var remember=  window.localStorage.getItem("remember");
    
    
    if(remember=='no')
    {
      recordar=false;
    }
    if(mail==null)
    {

      mail='';
    }
    if(pass==null)
    {
      pass='';
    }
    this.validations_form = this.formBuilder.group({
      email: new FormControl(mail, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl(pass, Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      remenber: new FormControl(recordar, Validators.compose([
        
      ])),
    });
  }
  
  login(value){
    this.working=true;
    value.msToken= window.localStorage.getItem("msToken");
    this.apiService.Post(value,"Users/Login")
    .then(res => {
      this.working=false;
      if(res.ok)
      {
        if(value.remenber)
        {
        window.localStorage.removeItem("emailMoney");
        window.localStorage.removeItem("passwordMoney");
        window.localStorage.removeItem("remember");
        window.localStorage.setItem("emailMoney",value.email);
        window.localStorage.setItem("passwordMoney",value.password);
        window.localStorage.setItem("remember","si");
        }
        else{
        window.localStorage.removeItem("emailMoney");
        window.localStorage.removeItem("passwordMoney");
        window.localStorage.removeItem("remember");
        window.localStorage.setItem("remember","no");
        }
      window.localStorage.removeItem("userinfo");
      window.localStorage.setItem("userinfo",JSON.stringify(res.data));
     
      console.log("ivancho..." + res.data.createCategory)
      var usuario_ =localStorage.getItem("user");
      var contraseña_ =localStorage.getItem("contraseña");
      console.log("el usuario es: ", usuario_)
      console.log("y la contraseña es: ",contraseña_)
      

      if(res.data.createCategory!=1)
      {
        document.getElementById("categorias").style.display = 'none'; //codigo de categoria        
        document.getElementById("version").style.display = 'none';
      }
      
      if(res.data.role=="Customer")
      {
        document.getElementById("pedidos").style.display="none";
        this.router.navigate(['/solicitudelist']);
      } 
      else
      {
        document.getElementById("pedidos").style.display="inline";
        this.router.navigate(['/companysol']);
      } 
    }
    else
    {
      this.busyService.presentAlert("¡Informe!",res.message);
    }
    }, err => {
      this.working=false;
      this.busyService.presentAlert("¡Informe!","Ocurrió un error, intente de nuevo");
    });
  }
  home()
  {
    this.router.navigate(['/inicio']);
  }
  resetpass()
  {
    this.router.navigate(['/resetpass']);
  }
  
}

