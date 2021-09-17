import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BusyService } from '../../services/busy.service';
import { HttpEventType,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AutoprovinceService } from '../../services/autoprovince.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-favoradd',
  templateUrl: './favoradd.page.html',
  styleUrls: ['./favoradd.page.scss'],
})
export class FavoraddPage implements OnInit {
  file1:File=null;
  file2:File=null;
  file3:File=null;
  file4:File=null;
  file5:File=null;
  file6 :File=null;
  imgurl1:string="";
  imgurl2:string="";
  imgurl3:string="";
  imgurl4:string="";
  imgurl5:string="";
  imgurl6:string="";
  date:Date=null;
  phone:string=null;
  note:string=null;
  id:number=0;
  leng:number=0;
  creationdate:Date=null;
  currency:number=null;
  amount:number=null;
  working:boolean=false;
  provinceId:number=0;
  provinceName:string='';
  img1:string=null;
  creationDate:Date=null;
   constructor(public photoViewer:PhotoViewer,public autoprovinceService:AutoprovinceService,public apiService:ApiService,public busyService:BusyService,public router:Router) { }
 
   ngOnInit() {
   }
   ionViewWillEnter(){
    if(localStorage.getItem("province")!=null)
    {
       let province=JSON.parse(window.localStorage.getItem("province"));
       this.provinceId=province.id;
       this.provinceName=province.name;
    }
     this. working=false;
     this.imgurl1="/assets/images/plus.png";
     this.imgurl2="/assets/images/plus.png";
     this.imgurl3="/assets/images/plus.png";
     this.imgurl4="/assets/images/plus.png";
     this.imgurl5="/assets/images/plus.png";
     this.imgurl6="/assets/images/plus.png";
     this.getdata();
   }
   selectedItem(value){
    this.provinceId=value.id;
    localStorage.removeItem("province");
    localStorage.setItem("province",JSON.stringify({id: value.id,name :this.provinceName}));
   }
   getdata(){
    this.id=0;
    this.phone=null;
    this.note=null;
    this.date=null;
    this.amount=null;
    this.img1=null;
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
        this.creationDate=res.CreationDate;
        if(res!=null)
        {
          this.provinceId=res.provinceId;
          this.provinceName==res.provinceName;
        }
        if(res.description!=null)
        {
          this.leng=res.description.length;
        }
        if(res.price!=null)
        {
          this.currency= this.amount;
        }
        if(res.img1!=null)
        {
          this.imgurl1=environment.fileurl + "postimages/" +res.img1 ;
          this.img1=res.img1
        }
      },err=>{
        this.working=false;
  
      })
    }
  }
  async delete()
  {
    var yes=await this.busyService.presentAlertYesNo("¡Información!","¿Eliminar esta publicación?");
    if(yes)
    {
    this.working=true;
    this.apiService.Delete("Posts/"+ this.id).then(res=>{
      this.working=false;
      this.router.navigate(['/posts']);
    },err=>{
      this.working=false;
    });
  }
  }
   get(event)
   {
     this.leng=event.length;
   }
   tocurrency()
 {
   this.currency= this.amount;
 }
  async  pickfile1(){
    if(this.file1!=null || this.img1!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file1=null;
       this.img1=null;
       this.imgurl1="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl1);
       return;
     }
     if(res=="S")
     {
       
       return;
     }
    }
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file1 = event.target.files[0];
    this.loadimg("img1",this.file1);
   };
   input.click();
   }
   pickfile2(){
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file2 = event.target.files[0];
    this.loadimg("img2",this.file2);
   };
   
   input.click();
   }
 
   pickfile3(){
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file3 = event.target.files[0];
    this.loadimg("img3",this.file3);
   };
   
   input.click();
   }
   pickfile4(){
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file4 = event.target.files[0];
    this.loadimg("img4",this.file4);
   };
   
   input.click();
   }
   pickfile5(){
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file5 = event.target.files[0];
    this.loadimg("img5",this.file5);
   };
   
   input.click();
   }
   pickfile6(){
     let input = document.createElement('input');
     input.type = 'file';
     input.onchange = (event:any) => { 
    if (event.target.files.length == 0) {
      this.busyService.presentAlert("¡Información!","No se ha seleccionado una imágen");
      return
   
    }
    this.file6 = event.target.files[0];
    this.loadimg("img6",this.file6);
   };
   
   input.click();
   }
   loadimg(to,file){
     // setting up the reader
     var reader = new FileReader();
     reader.readAsDataURL(file); // this is reading as data url
   
     // here we tell the reader what to do when it's done reading...
     reader.onload = (event: any) => {
       var content = event.target.result; // this is the content!
       if(to=='img1')  this.imgurl1 =  content ;
       if(to=='img2')  this.imgurl2 =  content ;
       if(to=='img3')  this.imgurl3 =  content ;
       if(to=='img4')  this.imgurl4 =  content ;
       if(to=='img5')  this.imgurl5 =  content ;
       if(to=='img6')  this.imgurl6 =  content ;
     }
   
   }
   async send(){
    if(this.provinceId==0)
    {
      await this.busyService.presentAlert("¡Información!","Elija una Ciudad");
     return;
    }
    if(this.phone==null || this.phone=='')
    {
      await this.busyService.presentAlert("¡Información!","Escriba un número de teléfono");
     return;
    }
    if(this.file1==null && this.note==null)
    {
      await this.busyService.presentAlert("¡Información!","Adjunte una imagen, también puede  agregar una descripción");
     return;
    }
  
    this.working=true;
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.creationDate= this.creationDate == null ? new Date() :this.creationDate;
    var formData= new FormData();
    let data={
      id:this.id,
     userId:userinfo.id,
     description:this.note,
     phone:this.phone,
     type:"F",
     price:this.amount,
     provinceId:this.provinceId,
     img1:this.img1,
     creationDate: this.creationDate

    };
    formData.append('img1', this.file1);
    formData.append('img2', this.file2);
    formData.append('img3', this.file3);
    formData.append('img4', this.file4);
    formData.append('img5', this.file5);
    formData.append('img6', this.file6);
    formData.append("post",JSON.stringify(data));
    this.apiService.upload("Posts/Upload",formData).subscribe(
     event => {
       if (event.type == HttpEventType.UploadProgress) {
         const percentDone = Math.round(100 * event.loaded / event.total);
       } else if (event instanceof HttpResponse) {
         if(event.body.ok){
           this.working=false;
           this.busyService.presentAlert("Información","Publicación Enviada");
           this.router.navigate(['/posts']);
         }else{
           this.working=false;
           this.busyService.presentAlert("Información","Publicación no Enviada");
         }
       }
     },
     (err) => {
       console.log(err);
       this.working=false;
       this.busyService.presentAlert("Información","Error al enviar Publicación");
     }, () => {
     }
   );
   }
   
 }
 