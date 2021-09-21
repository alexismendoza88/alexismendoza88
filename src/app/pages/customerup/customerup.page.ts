import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';

@Component({
  selector: 'app-customerup',
  templateUrl: './customerup.page.html',
  styleUrls: ['./customerup.page.scss'],
})
export class CustomerupPage implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';
  form : FormGroup;
  working:boolean;
  userinfo:any;
  constructor(private router:Router,private apiService:ApiService,
    private formBuilder: FormBuilder,private busyService:BusyService) { 
      this.form = this.formBuilder.group({
        email: ['' , [Validators.required]],
        id: ['', [Validators.required]],
        userId: ['', [Validators.required]],
        name: ['', { 
          required: false,
        }],
        phone: [''],
        fijo: [''],
      },);
    }

  ngOnInit() {
   
  }
  
  ionViewWillEnter(){
    this.userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.getdata();
  }
  getdata(){
    this.working=true;
    this.apiService.Get("Customers/CustomerUser/"+this.userinfo.id ).then(res=>{
      this.working=false;
       this.form.get("email").setValue(res.email);
       this.form.get("name").setValue(res.name);
       this.form.get("phone").setValue(res.phone);
       this.form.get("fijo").setValue(res.fijo);
       this.form.get("userId").setValue(res.userId);
       this.form.get("id").setValue(res.id);  
    }, err => {
      this.working=false;
       this.errorMessage = err.message;
         this.busyService.presentAlert("¡Información!","Error al consultar información de su cuenta");
     });
  }
  async tryRegister(form){
   
    this.working=true;
    this.apiService.Put(form,"Customers/" + form.id)
     .then(res => {
      this.working=false;
       this.errorMessage = "";     
        this.busyService.presentAlert("¡Información!","Cuenta Actualizada Exitosamente");
        this.getdata();
     }, err => {
      this.working=false;
       this.errorMessage = err.message;
         this.busyService.presentAlert("¡Información!","No fue posible crear la cuenta");
     })
  }

}
