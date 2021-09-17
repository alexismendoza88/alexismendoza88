import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BusyService } from '../../services/busy.service';
import { HttpEventType,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AutoprovinceService } from '../../services/autoprovince.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-classifiedadd',
  templateUrl: './classifiedadd.page.html',
  styleUrls: ['./classifiedadd.page.scss'],
})
export class ClassifiedaddPage implements  OnInit {
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
  img2:string=null;
  img3:string=null;
  img4:string=null;
  img5:string=null;
  img6:string=null;
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
   async delete()
   {
     var yes=await this.busyService.presentAlertYesNo("¡ Información !","¿ Eliminar esta publicación ?");
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
   getdata(){
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
          this.img1=res.img1;
        }
        if(res.img2!=null)
        {
          this.imgurl2=environment.fileurl + "postimages/" +res.img2 ;
          this.img2=res.img2;
        }
        if(res.img3!=null)
        {
          this.imgurl3=environment.fileurl + "postimages/" +res.img3 ;
          this.img3=res.img3;
        }
        if(res.img4!=null)
        {
          this.imgurl4=environment.fileurl + "postimages/" +res.img4 ;
          this.img4=res.img4;
        }
        if(res.img5!=null)
        {
          this.imgurl5=environment.fileurl + "postimages/" +res.img5 ;
          this.img5=res.img5;
        }
        if(res.img6!=null)
        {
          this.imgurl6=environment.fileurl + "postimages/" +res.img6 ;
          this.img6=res.img6;
        }
      },err=>{
        this.working=false;
  
      })
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
  async pickfile1(){
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
   async pickfile2(){
    if(this.file2!=null || this.img2!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file2=null;
       this.img2=null;
       this.imgurl2="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl2);
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
    this.file2 = event.target.files[0];
    this.loadimg("img2",this.file2);
   };
   
   input.click();
   }
 
   async pickfile3(){
    if(this.file3!=null || this.img3!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file3=null;
       this.img3=null;
       this.imgurl3="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl3);
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
    this.file3 = event.target.files[0];
    this.loadimg("img3",this.file3);
   };
   
   input.click();
   }
   async pickfile4(){
    if(this.file4!=null || this.img4!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file4=null;
       this.img4=null;
       this.imgurl4="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl4);
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
    this.file4 = event.target.files[0];
    this.loadimg("img4",this.file4);
   };
   
   input.click();
   }
   async pickfile5(){
    if(this.file5!=null|| this.img5!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file5=null;
       this.img5=null;
       this.imgurl5="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl5);
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
    this.file5 = event.target.files[0];
    this.loadimg("img5",this.file5);
   };
   
   input.click();
   }
  async pickfile6(){
    if(this.file6!=null|| this.img6!=null)
    {
     let res=await this.busyService.presentActionSheet();
     if(res=="E")
     {
       this.file6=null;
       this.img6=null;
       this.imgurl6="/assets/images/plus.png";
       return;
     }
     if(res=="V")
     {
      this.photoViewer.show(this.imgurl6);
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
    if(this.note==null)
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
     type:"C",
     price:this.amount,
     provinceId:this.provinceId,
     img1:this.img1,
     img2:this.img2,
     img3:this.img3,
     img4:this.img4,
     img5:this.img5,
     img6:this.img6,
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
           this.busyService.presentAlert("¡Información!","Publicación Enviada");
           this.router.navigate(['/posts']);
         }else{
           this.working=false;
           this.busyService.presentAlert("¡Información!","Publicación no Enviada");
         }
       }
     },
     (err) => {
       console.log(err);
       this.working=false;
       this.busyService.presentAlert("¡Información!","Error al  enviar Publicación");
     }, () => {
     }
   );
   }
   
 }
 