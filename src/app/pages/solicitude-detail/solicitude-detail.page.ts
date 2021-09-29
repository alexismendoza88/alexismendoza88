import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-solicitude-detail',
  templateUrl: './solicitude-detail.page.html',
  styleUrls: ['./solicitude-detail.page.scss'],
})
export class SolicitudeDetailPage implements OnInit {
item:any=null;
apifile:string='';
working:boolean=false;
userid:any=null;
role:any=null;
responId:number=0;
  constructor(private photoViewer: PhotoViewer,public apiService:ApiService,public router:Router) { }

  ngOnInit() {
  }
  photoview(url:string){
    this.photoViewer.show(url);
  }
  ionViewWillEnter(){    
    this.responId=0;
    this.item=null;
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.userid=userinfo.id;
    this.role=userinfo.role;
    this.apifile=environment.fileurl + "solicitudefiles/";
    this.working=true;
    this.apiService.Get("Solicitudes/"+ window.localStorage.getItem("solicitudeId")).then(res=>{
    this.working=false;
    window.localStorage.setItem('Incluir_Descuento',  res.descuento);
    if( res.fileUrl!=null &&  res.fileUrl!='')
    {
    res.fileUrl= this.apifile +  res.fileUrl;
    }
   this.item=res;
    var filter= res.responses.filter(s=> s.company.userId== userinfo.id);
    if(filter.length > 0)
    {
      this.responId=filter[0].id;      
    }
  },err=>{
    this.working=false;
  })
  }
  response(){
    if(this.responId!=0)
    {
      window.localStorage.removeItem('solicitudeId');
      window.localStorage.setItem('solicitudeId',this.item.id);
      window.localStorage.removeItem('responseId');
      window.localStorage.setItem('responseId',  this.responId.toString());
      this.router.navigate(['/response-detail']);
    }
    else
    {
      window.localStorage.removeItem('responseId');
      window.localStorage.removeItem('solicitudeId');
      window.localStorage.setItem('solicitudeId',this.item.id);
      this.router.navigate(['/response']);
    }
  }
}
