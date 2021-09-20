import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BusyService } from '../../services/busy.service';
import { HttpEventType,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {
  items:any=[];
  amount:string=null;
  finalamount:string=null;
  file:File=null;
  note:string=null;
  solicitudeId:string=null;
  userId:string=null;
  working:boolean=false;
  delivery:string="";
  fileUrl:string='';
  leng:number=0;
  currency:string='';
  currency2:string='';
  apifile:string='';
  responseId:any=null;
  constructor( public apiService:ApiService,public busyService:BusyService,public router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    
    this.solicitudeId= window.localStorage.getItem('solicitudeId');
    this.responseId= window.localStorage.getItem("responseId");
    if(window.localStorage.getItem("responseId")!=null)
    {
     this.getdata();
    }
    else
    {
      this.amount=null;
      this.finalamount=null;
      this.file=null;
      this.note=null;
      this.delivery="";
      this.fileUrl="";
      this.currency= null;
      this.currency2= null;
    }
   }
   detailsolicitude(){
    this.router.navigate(['/solicitude-detail']);
   }
   getdata(){
     this.apifile=environment.fileurl + "responsefiles/";
      this.working=true;
      this.apiService.Get("Responses/"+ window.localStorage.getItem("responseId")).then(res=>{
      this.working=false;
      if( res.fileUrl!=null &&  res.fileUrl!='')
      {
        this.fileUrl = this.apifile +  res.fileUrl;
      }
      this.amount=res.amount;
      this.finalamount=res.finalAmount;
      if(res.note==null || res.note =='null')
      {
        this.note='';
      }
      else
      {
        this.note=res.note;
      }
      this.delivery=res.delivery;
      this.currency= this.amount;
      this.currency2= this.finalamount;
    },err=>{
      this.working=false;
    });
   }
tocurrency()
{
  this.currency= this.amount;
}
tocurrency2()
{
  this.currency2= this.finalamount;
}
get(event)
{
  this.leng=event.length;
}

 async send(){
  if(this.amount==null)
  {
    await this.busyService.presentAlert("¡Información!","El campo Precio del Producto ó Servicio es Requerido.");
   return;
  }
  if(this.finalamount==null)
  {
    this.finalamount=this.amount;
  }
  if(parseInt( this.finalamount)>parseInt( this.amount))
  {
    await this.busyService.presentAlert("¡Información!","El campo Último Precio o Descuento debe ser menor ó igual que el Precio Original.");
   return;
  }
 this.working=true;
 let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
  var responseIdx= window.localStorage.getItem('responseId') == null ? "-1" :window.localStorage.getItem('responseId');
 var formData= new FormData();
 formData.append('upload', this.file);
 formData.append("userId",userinfo.id);
 formData.append("solicitudeId",this.solicitudeId);
 formData.append("note",this.note);
 formData.append("finalamount",this.finalamount); 
 formData.append("amount",this.amount);
 formData.append("delivery",this.delivery);
 formData.append("responseId",responseIdx);
 this.apiService.upload("Responses/Upload",formData).subscribe(
  event => {
    if (event.type == HttpEventType.UploadProgress) {
      const percentDone = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      if(event.body.ok){
        this.working=false;
        this.busyService.presentAlert("¡Información!","Respuesta Enviada");
        this.router.navigate(['/companysol']);
      }else{
        this.working=false;
        this.busyService.presentAlert("¡Información!","Respuesta no Enviada");
      }
    }
  },
  (err) => {
    this.working=false;
    this.busyService.presentAlert("¡Información!","Error al enviar Respuesta");
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
 this.loadimg("#image",this.file);
};
input.click();
}
loadimg(idimg,file){
  // setting up the reader
  var reader = new FileReader();
  reader.readAsDataURL(file); // this is reading as data url

  // here we tell the reader what to do when it's done reading...
  reader.onload = (event: any) => {
    var content = event.target.result; // this is the content!
    this.fileUrl =  content ;
  }

}
clearimg(){
this.fileUrl='';
this.file=null;
}
}