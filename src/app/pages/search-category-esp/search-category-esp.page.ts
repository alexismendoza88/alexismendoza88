import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-category-esp',
  templateUrl: './search-category-esp.page.html',
  styleUrls: ['./search-category-esp.page.scss'],
})
export class SearchCategoryEspPage implements OnInit {

  working:Boolean=false;
  categoryTitle = "...";
  categories:any= [];
  previuscategories:any= [];
  selectedcategories:any= [];
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

  seleccion_categoria(item:any)
  {
    this.selectedcategories.push(item);
  } 

  enviar_categoria()
  {
    window.localStorage.removeItem('categoria_seleccion');
    window.localStorage.setItem('categoria_seleccion', JSON.stringify(this.selectedcategories)); 
    this.location.back();
  }   
}
