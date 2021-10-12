import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.page.html',
  styleUrls: ['./search-category.page.scss'],
})
export class SearchCategoryPage implements OnInit {

  working:Boolean=false;
  categoryTitle = "...";
  categories:any= [];
  previuscategories:any= [];
  userinfo:any=null;
  auth:any=false;
  Productstypes:any=new Array();
  productsAves:any= [];
  paramSearch:string='';
  shouldShowCancel:any=false;

  constructor(private location:Location, public apiService:ApiService) { }

  ngOnInit() {
    this.apiService.Get("Categories").then(res=>{
      this.categories=res;
      this.previuscategories=res;
    });
  }

  change()
  {
    if(this.paramSearch!= null && this.paramSearch!= "")
    {
     this.categories=this.previuscategories.filter(s=> s.name?.toLowerCase().indexOf(this.paramSearch.toLowerCase()) >= 0 );
    }
    else{
      this.categories=this.previuscategories;
    }
  }  

  onCancel(event)
  {
   this.categories=this.previuscategories;
  }

  seleccionar(item:any)
  {
    window.localStorage.removeItem('item');
    window.localStorage.setItem('item',JSON.stringify(item)); 
    this.location.back();
  }  
  
}
