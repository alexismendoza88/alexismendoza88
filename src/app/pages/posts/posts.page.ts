import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(public apiService:ApiService,public router:Router,public busyService:BusyService) { }
  working:boolean=false;
  items=[];
  selecctedItems=[];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.activities();
   }

   activities(){
    this.working=true;
    let userinfo= JSON.parse(window.localStorage.getItem("userinfo"));
    this.apiService.Get("Posts/PostsByUser/"+ userinfo.id ).then(async res=>{
      this.working=false;
      this.items=res;
      this.items.forEach(element => {
        if(element.img1!=null)
        {
          element.img1=environment.fileurl + "postimages/" +element.img1 ;
        }
      });

    },err=>{
      this.working=false;
    });
   }
   details(item)
   {    
     localStorage.removeItem("postid");
     localStorage.setItem("postid",item.id);
      if(item.type=='A')
      {
        this.router.navigate(['/activityadd']);
      }else if (item.type=='C')
      {
        this.router.navigate(['/classifiedadd']);
      }else{
        this.router.navigate(['/favoradd']);
      }
   } 

   pressed(item){
    var exits= this.selecctedItems.filter(s=> s.id== item.id)
    if(exits.length ==0){
      this.selecctedItems.push(item);
      var myDiv = document.getElementById(item.id);
      myDiv.classList.add("item-background-color");
    }
  }

  cancel(){
    this.selecctedItems.forEach(obj=> 
    {
      var myDiv = document.getElementById(obj.id);
      myDiv.classList.remove("item-background-color");
    });
    this.selecctedItems=[];
  }

  async delete(){
    var yes=await this.busyService.presentAlertYesNo("¡Información!","¿Desea eliminar los ítems seleccionados?");
    if(yes)
    {
      this.working=true;
      this.apiService.Post(this.selecctedItems,"Posts/DeleteList").then(res=>{
      this.working=true;
      this.selecctedItems=[];
      this.activities();
    },err=>{
      this.working=false;
      this.busyService.presentAlert("¡Informe!","Algo salió mal, intente de nuevo");
    });
  }
  }

  click(item){
    if(this.selecctedItems.length == 0){
      localStorage.removeItem("postid");
      localStorage.setItem("postid",item.id);
       if(item.type=='A')
       {
         this.router.navigate(['/activityadd']);
       }else if (item.type=='C')
       {
         this.router.navigate(['/classifiedadd']);
       }else{
         this.router.navigate(['/favoradd']);
       }
    }else{
      var exits= this.selecctedItems.filter(s=> s.id== item.id)
      if(exits.length ==0){
        this.selecctedItems.push(item);
        var myDiv = document.getElementById(item.id);
        myDiv.classList.add("item-background-color");
      }else{
        this.selecctedItems=this.selecctedItems.filter(s=> s.id!= item.id);
        var myDiv = document.getElementById(item.id);
        myDiv.classList.remove("item-background-color");
      }
    }
  }
}
