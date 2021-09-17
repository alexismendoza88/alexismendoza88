import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { AlertController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { RouteComponent } from '../../components/route/route.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-response-detail',
  templateUrl: './response-detail.page.html',
  styleUrls: ['./response-detail.page.scss'],
})
export class ResponseDetailPage implements OnInit {
  item:any=null;
  apifile:string='';
  working:boolean=false;
  userid:any=null;
  role:any=null;
    constructor(private modalController:ModalController, private callNumber:CallNumber, private photoViewer: PhotoViewer,public apiService:ApiService,public router:Router,public busyService:BusyService,public alertController:AlertController) { }
  
    ngOnInit() {
    }
    photoview(url:string){
      this.photoViewer.show(url);
    }
    ionViewWillEnter(){
    this.getdata();
    }
    call(number:string)
    {
    this.callNumber.callNumber(number, true)
    .then(res => {})
    .catch(err => {});
    }
   getdata(){
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.userid=userinfo.id;
    this.role=userinfo.role;
    this.apifile=environment.fileurl + "responsefiles/";
    this.working=true;
    this.apiService.Get("Responses/"+ window.localStorage.getItem("responseId")).then(res=>{
    this.working=false;
    if( res.fileUrl!=null &&  res.fileUrl!='')
    {
    res.fileUrl= this.apifile +  res.fileUrl;
    }
    this.item=res;
    },err=>{
      this.working=false;
    });
   }
   async navigate()
   {
     localStorage.removeItem("mapdest");
     localStorage.setItem("mapdest",JSON.stringify({lat:this.item.company.lat,lng:this.item.company.lng}));
     const modal = await this.modalController.create({
      component: RouteComponent
     });
      modal.onDidDismiss().then(async(res)=>{
         if(res.data){
         }
       });
     return await modal.present();
   }
 edit()
  {

      window.localStorage.setItem('responseId',window.localStorage.getItem("responseId"));
      this.router.navigate(['/response']);
  }
  async delete()
  {
    var yes=await this.busyService.presentAlertYesNo("¡Información!","¿Desea eliminar esta respuesta?");
    if(yes)
    {
    this.working=true;
    this.apiService.Delete("Responses/"+ window.localStorage.getItem("responseId")).then(res=>{
      this.working=false;
      this.router.navigate(['/solicitude-detail']);
    },err=>{
      this.working=false;
    });
  }
  }

  async Interested() {
    const alert = await this.alertController.create({
      header: '¿Seguro te Interesa?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Sí',
          handler:async (data) => {
            this.working=true;
            let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));        
            var datasend={
              "userId": userinfo.id,
              "responseId": window.localStorage.getItem("responseId"),
            }
            this.apiService.Post(datasend,"Responses/Interested").then(res=>{
              this.working=false;
              this.busyService.presentAlert("¡Información!","Datos Enviados");
              this.getdata();
            },err=>{
              this.working=false;
              this.busyService.presentAlert("¡Información!","Error al enviar los datos");
            });
          }
        }
      ]
    });

    await alert.present();
  }
  }
  