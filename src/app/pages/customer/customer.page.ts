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

  ngOnInit() {
   
  }
  async tryRegister(form){
   
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
       this.router.navigate(['/login']);
     }, err => {
      this.working=false;
       this.errorMessage = err.message;
         this.busyService.presentAlert("¡Información!","No fue posible crear la cuenta");
     })
  }
}
