import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { BusyService } from '../../services/busy.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-classified',
  templateUrl: './classified.page.html',
  styleUrls: ['./classified.page.scss'],
})
export class ClassifiedPage implements OnInit {

  constructor(public apiService:ApiService,public router:Router,public busyService:BusyService) { }
  working:boolean=false;
  items=[];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.activities();
   }

   activities(){
    this.working=true;
    let provinceId= localStorage.getItem("province")==null ? -1 :(JSON.parse(localStorage.getItem("province"))).id;
    this.apiService.Get("Posts/PostsByType/C/" + provinceId ).then(async res=>{
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
    this.router.navigate(['/postdetail']);
   }
}
