import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  errorMessage: string = '';
  
  successMessage: string = '';
  form : FormGroup;
  working:boolean=false;
  // items:any=[];
  // provinceId:number=0;
  // note:string=null;
  // file:File=null;
  // provinceName:string="";
  // userinfo:any;
  // leng:number=0;
  // id:any="";
  // categoriesple:any="";
  // compareWith :any;
  constructor( private location: Location,private router:Router,private apiService:ApiService,
    private formBuilder: FormBuilder,private busyService:BusyService) { 
      this.form = this.formBuilder.group({
        id: ['0' , [Validators.required]],
        name: ['', [Validators.required]],
      },);
    }

  ngOnInit() {
  
  }
  async tryRegister(form){ 
    this.working=true;
    this.apiService.Post(form,"Categories")
     .then(res => {
      this.working=false;
       this.errorMessage = "";     
        this.busyService.presentAlert("¡Información!","Categoria creada exitosamente");
        this.location.back();
     }, err => {
      this.working=false;
       this.errorMessage = err.message;
         this.busyService.presentAlert("¡Información!","No fue posible actualizar la Categoria");
     });
  }
}

