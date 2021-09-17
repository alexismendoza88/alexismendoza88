import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  styleUrls: ['./postdetail.page.scss'],
})
export class PostdetailPage implements OnInit {
  working:boolean=false;
  id:number=0;
  date:Date=null;
  phone:string=null;
  note:string=null;
  currency:number=null;
  amount:number=null;
  creationDate:Date=null;
  images:any=[];
  constructor(public  callNumber:CallNumber,public photoViewer:PhotoViewer,public apiService:ApiService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){   
    this. working=false;
    this.getdata();
  }
  getdata(){
    this.images=[];
    this.id=0;
    this.phone=null;
    this.note=null;
    this.date=null;
    this.amount=null;
    let idexist= localStorage.getItem("postid");
    if(idexist!=null)
    {
      localStorage.removeItem("postid");
      this.working=true;
      this.apiService.Get("Posts/"+ idexist).then(res=>{
        this.working=false;
        this.id=res.id;
        this.phone=res.phone;
        this.note=res.description;
        this.date=res.activityDate;
        this.amount=res.price;
        this.creationDate=res.creationDate;
        if(res.price!=null)
        {
          this.currency= this.amount;
        }
        if(res.img1!=null)
        {
         this.images.push(environment.fileurl + "postimages/" +res.img1 );
        }
        if(res.img2!=null)
        {
          this.images.push(environment.fileurl + "postimages/" +res.img2) ;
        }
        if(res.img3!=null)
        {
          this.images.push(environment.fileurl + "postimages/" +res.img3);
        }
        if(res.img4!=null)
        {
          this.images.push(environment.fileurl + "postimages/" +res.img4);
        }
        if(res.img5!=null)
        {
          this.images.push(environment.fileurl + "postimages/" +res.img5) ;
        }
        if(res.img6!=null)
        {
          this.images.push(environment.fileurl + "postimages/" +res.img6);
        }
      },err=>{
        this.working=false;
  
      })
    }
  
    }
  call(number:string)
  {
  this.callNumber.callNumber(number, true)
  .then(res => {})
  .catch(err => {});
  }
  photoview(url:string){
    this.photoViewer.show(url);
  }
}
