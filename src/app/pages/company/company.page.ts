import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
import { MapComponent } from '../../components/map/map.component';
import { ModalController } from '@ionic/angular';
import { AutoprovinceService } from '../../services/autoprovince.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

 
  errorMessage: string = '';
  successMessage: string = '';
  form : FormGroup;
  working:boolean=false;
  items:any=[];
  provinceId:number=0;
  provinceName:string="";
  ms:any=null;

  categoryId:string=null;
  categoryDescr:string=null;
  constructor(public autoprovinceService:AutoprovinceService, public modalController: ModalController,private router:Router,private apiService:ApiService,
    private formBuilder: FormBuilder,private busyService:BusyService) { 
      this.form = this.formBuilder.group({
        email: ['' , 
        Validators.compose([
          Validators.minLength(6),
          Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])      
      ],
        password: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])],
        confirm: ['',[Validators.required]],
        name: [''],
        phone: [''],
        fijo:[''],
        ubication: [''],
        facebook:[''],
        youtube:[''],
        instagram:[''],
        provinceName: [''],
        categoriesid: [[],[Validators.required]],
        hasDelivery: new FormControl(false),
        lat: [''],
        lng: [''],
        seleccion_categoria:[''],        
      },);
    }
    async presentMap() {
      const modal = await this.modalController.create({
      component: MapComponent
     });
      modal.onDidDismiss().then(async(res)=>{
         if(res.data){
          this.form.get("ubication").setValue(res.data.dir);
          this.form.get("lat").setValue(res.data.lat);
          this.form.get("lng").setValue(res.data.lng);
         }
       });
     return await modal.present();
     }
  ngOnInit() {
  
  }
  selectedItem(value){
    this.provinceId=value.id;
   }
  itemRemoved(event)
  {
  this.provinceId=0;
  }
  ionViewWillEnter(){
    this.working=true;
    this.apiService.Get("Categories").then(res=>{
      this.items=res;
      this.working=false;
    },err=>{
      this.working=false;
    });
    if(localStorage.getItem("item")!=null)
    {
       let objCat=JSON.parse(window.localStorage.getItem("item"));     
       this.categoryId=objCat.id;
       this.categoryDescr=objCat.name;
    }  
    if(localStorage.getItem("categoria_seleccion")!=null)
    {
       let objCatSel=JSON.parse(window.localStorage.getItem("categoria_seleccion"));    
      this.form.get("seleccion_categoria").setValue(objCatSel.map(s=>s.name).join('-'));
      this.form.get("categoriesid").setValue(objCatSel.map(s=>s.id));
    }                
  }
  async focus(){
    let res= await  this.busyService.AceptInfo("¡Información!","Recuerda activar la Ubicación");
    if(res)
    {
      await this.presentMap();
    }
  }
  async tryRegister(form){
    
    if(form.confirm!=form.password)
    {
      await  this.busyService.presentAlert("¡Información!","La clave y confirmar clave no son iguales");
      return;
    } 
    this.working=true;
    form.provinceId=this.provinceId;
    this.apiService.Post(form,"Companies")
     .then(res => {
      this.working=false;
       this.errorMessage = "";     
        this.busyService.presentAlert("¡Información!","Registro creado exitosamente");
       this.router.navigate(['/login']);
     }, err => {
      this.working=false;
      this.errorMessage = err.message;
      this.ms = JSON.stringify(err.error.message.Message);
      if (this.ms.indexOf("EMAIL"))
      {
       this.ms="La dirección de correo electrónico ya se encuentra registrada.";
      }
      else{
       if (this.ms.indexOf("PHONE"))
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

     onFocus(event:any){
      this.router.navigate(['/search-category-esp']);  
      
    }   
  }


