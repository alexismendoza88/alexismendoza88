import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

 
  errorMessage: string = '';
  successMessage: string = '';
  form : FormGroup;
  working:boolean;
  ms:any=null;
  constructor(private router:Router,private apiService:ApiService,
    private formBuilder: FormBuilder,private busyService:BusyService) { 
      this.form = this.formBuilder.group({
        email: ['' , [Validators.required]],
        password: ['', [Validators.required]],
        confirm: ['',[Validators.required]],
        name: ['', { 
          required: false,
        }],
        phone: [''],
        fijo: [''],
      },);
    }
    passwordType: string = 'password';
    passwordIcon: string = 'eye-off';
   
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

  ngOnInit() {
   
  }
  async tryRegister(form){
    var usuario = (<HTMLInputElement>document.getElementById("usuario")).value;
    var contraseña = (<HTMLInputElement>document.getElementById("contraseña")).value;
    if(form.confirm!=form.password)
    {
      await  this.busyService.presentAlert("¡Información!","La clave y confirmar clave no son iguales");
      return;
    } 
    this.working=true;
    this.apiService.Post(form,"Customers")
     .then(res => {
      this.working=false;
       this.errorMessage = "";     
        this.busyService.presentAlert("¡Información!","Registro creado exitosamente");
        localStorage.setItem('user',usuario)
        localStorage.setItem('contraseña',contraseña)
    
       this.router.navigate(['/login']);
     }, err => {
      this.working=false;
      this.errorMessage = err.message;
      this.ms = JSON.stringify(err.error.message.Message);
      if (this.ms.indexOf("EMAIL")>0 || (this.ms.indexOf("Email")>0))
      {
       this.ms="La dirección de correo electrónico ya se encuentra registrada.";
      }
      else{
       if (this.ms.indexOf("PHONE")>0)
       {
         this.ms="El número de Teléfono ya se encuentra registrado.";
       }
       else
       {
         this.ms="No fue posible crear la cuenta.";
       }
      }
      this.busyService.presentAlert("¡Información!",this.ms);
    });
     };
  }
     
  

