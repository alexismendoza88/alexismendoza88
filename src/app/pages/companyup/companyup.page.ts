import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
import { AutoprovinceService } from '../../services/autoprovince.service';
import { MapComponent } from '../../components/map/map.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-companyup',
  templateUrl: './companyup.page.html',
  styleUrls: ['./companyup.page.scss'],
})
export class CompanyupPage implements OnInit {
  errorMessage: string = '';
  
  successMessage: string = '';
  form : FormGroup;
  working:boolean=false;
  items:any=[];
  provinceId:number=0;
  note:string=null;
  file:File=null;
  provinceName:string="";
  userinfo:any;
  leng:number=0;
  id:any="";
  categoriesple:any="";
  compareWith :any;
  constructor(public modalController: ModalController,public autoprovinceService:AutoprovinceService, private router:Router,private apiService:ApiService,
    private formBuilder: FormBuilder,private busyService:BusyService) { 
      this.form = this.formBuilder.group({
        id: ['' , [Validators.required]],
        email: ['' , [Validators.required]],
        name: [''],
        phone: [''],
        fijo:[''],
        userId: [''],
        creationDate: [''],
        ubication: [''],
        facebook:[''],
        youtube:[''],
        instagram:[''],
        provinceName: [''],
        categoriesid: [[],[Validators.required]],
        notifications: [],
        RtpaInmediata:[''],
        hasDelivery: new FormControl(false),
        lat: [''],
        lng: [''],
      },);
    }

  ngOnInit() {
  
  }
  selectedItem(value){
    this.provinceId=value.id;
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
  ionViewWillEnter(){
    
    this.userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.working=true;
    this.apiService.Get("Categories").then(res=>{
      this.working=false;
      this.items=res;
      this.getdata();
    },err=>{
      this.working=false;
    });
  }
  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };
getdata(){
  
  this.working=true;
  this.apiService.Get("Companies/CompanyUser/"+this.userinfo.id ).then(res=>{
    this.working=false;
    var formData= new FormData();
     this.form.get("email").setValue(res.email);
     this.form.get("name").setValue(res.name);
     this.form.get("phone").setValue(res.phone);
     this.form.get("fijo").setValue(res.fijo);
     this.form.get("ubication").setValue(res.ubication);
     this.form.get("facebook").setValue(res.facebook);
     this.form.get("youtube").setValue(res.youtube);
     this.form.get("instagram").setValue(res.instagram);
     this.form.get("categoriesid").setValue(res.categoriesid);
     this.form.get("provinceName").setValue(res.provinceName);
     this.provinceId=res.provinceId;
     this.form.get("hasDelivery").setValue(res.hasDelivery);
     this.form.get("creationDate").setValue(res.creationDate);
     this.form.get("notifications").setValue(res.notifications);
     this.form.get("RtpaInmediata").setValue(res.RtpaInmediata);
     this.form.get("userId").setValue(res.userId);
     this.form.get("id").setValue(res.id);
     this.form.get("lat").setValue(res.lat);
     this.form.get("lng").setValue(res.lng);
     this.id=res.id;
  }, err => {
    this.working=false;
     this.errorMessage = err.message;
       this.busyService.presentAlert("¡Información!","Error al consultar información de su cuenta");
   });
}

itemRemoved(event)
{
  this.provinceId=0;
}
  async tryRegister(form){ 
    this.working=true;
    form.provinceId=this.provinceId;
    this.apiService.Post(form,"Companies/CompanyUp")
     .then(res => {
       alert(form.notifications);
      localStorage.removeItem("notifications");
       localStorage.setItem("notifications",form.notifications)
      this.working=false;
       this.errorMessage = "";     
        this.busyService.presentAlert("¡Información!","Cuenta actualizada exitosamente");
       this.getdata();
     }, err => {
      this.working=false;
       this.errorMessage = err.message;
         this.busyService.presentAlert("¡Información!","No fue posible actualizar la cuenta");
     });
  }
}

