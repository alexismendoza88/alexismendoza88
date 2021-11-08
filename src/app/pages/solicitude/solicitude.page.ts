import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BusyService } from '../../services/busy.service';
import { HttpEventType,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { AutoprovinceService } from '../../services/autoprovince.service';


// import {Storage}from '@ionic/storage';
@Component({
  selector: 'app-solicitude',
  templateUrl: './solicitude.page.html',
  styleUrls: ['./solicitude.page.scss'],
})
export class SolicitudePage implements OnInit {
  
  items:any=[];
  description:string=null;
  file:File=null;
  note:string=null;
  categoryId:string=null;
  categoryDescr:string=null;
  userId:string=null;
  working:boolean=false;
  fileUrl:string='';
  leng:number=0;
  provinceId:number=0;
  provinceName:string='';
  descuento:boolean=null;
  V_nombre:string=null;
  ispdf:boolean=false;
  constructor(public autoprovinceService:AutoprovinceService,public apiService:ApiService,public busyService:BusyService,public router:Router) { }
  
  ngOnInit() {
    this.descuento=true;
    this.apiService.Get("Categories").then(res=>{
      this.items=res;
    });
  }
  
  get(event)
{
  this.leng=event.length;
}
selectedItem(value){
 this.provinceId=value.id;
 localStorage.removeItem("province");
 localStorage.setItem("province",JSON.stringify({id: value.id,name :this.provinceName}));
}

ionViewWillEnter(){
  if(localStorage.getItem("province")!=null)
  {
     let province=JSON.parse(window.localStorage.getItem("province"));
     this.provinceId=province.id;
     this,this.provinceName=province.name;
  }
  if(localStorage.getItem("item")!=null)
  {
     let objCat=JSON.parse(window.localStorage.getItem("item"));     
     this.categoryId=objCat.id;
     this.categoryDescr=objCat.name;
  }  
 }
 

itemRemoved(event)
{
  this.provinceId=0;
  localStorage.removeItem("province");
}

async send(){
  console.log(localStorage.getItem("province"));
  if(this.categoryId==null)
  {
    await this.busyService.presentAlert("¡Información!","Debe seleccionar una Categoría.");
   return;
  }  
  if(this.provinceId==0)
  {
    await this.busyService.presentAlert("¡Información!","Debe escribir una Ciudad.");
   return;
  }
  if(this.file==null && this.note==null)
  {
    await this.busyService.presentAlert("¡Información!","¡Describa lo que busca o Adjunte un PDF / Imágen.");
   return;
  }
 this.working=true;
 let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
 var formData= new FormData();
 formData.append('upload', this.file);
 formData.append("userId",userinfo.id);
 formData.append("categoryId",this.categoryId);
 formData.append("note",this.note);
 formData.append("description",this.description);
 formData.append("provinceId",this.provinceId.toString());
 formData.append("descuento",this.descuento.toString());
 formData.append("V_nombre",this.V_nombre);

 
 this.apiService.upload("Solicitudes/Upload",formData).subscribe(
  event => {
    if (event.type == HttpEventType.UploadProgress) {
      const percentDone = Math.round(100 * event.loaded / event.total);      
    } else if (event instanceof HttpResponse) {
      if(event.body.ok){
        this.working=false;
        this.busyService.presentAlert("¡Información","Solicitud Enviada");
        
        localStorage.removeItem("item");
        localStorage.removeItem("province");
        this.provinceId=0;
        this.router.navigate(['/solicitudelist']);
      }else{
        this.working=false;
        this.busyService.presentAlert("¡Información!","Solicitud no Enviada");
      }
    }
  },
  (err) => {
    this.working=false;
    this.busyService.presentAlert("¡Información!","Error al  enviar la Solicitud");
  }, () => {
  }
);
}



pickfile(){
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = (event:any) => { 
 if (event.target.files.length == 0) {
   this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
   return

 }
 this.file = event.target.files[0];
 this.loadimg(this.file);
};
input.click();
}


loadimg(file){
  // setting up the reader
  var reader = new FileReader();
  reader.readAsDataURL(file); // this is reading as data url

  // here we tell the reader what to do when it's done reading...
  reader.onload = (event: any) => {
    console.log(event.target.result.indexOf("data:application/pdf"));
    if(event.target.result.indexOf("data:application/pdf")>=0)
    {
      this.ispdf=true;
      this.fileUrl ="PDF";
    }
    else{
      this.ispdf=false;
      var content = event.target.result; // capturo el contenido del content
      this.fileUrl =  content ;
    }
  }

}


clearimg(){
this.fileUrl='';
this.file=null;
}
onFocus(event:any){
  this.router.navigate(['/search-category']);    
}
}
