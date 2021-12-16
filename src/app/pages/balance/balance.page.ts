import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  errorMessage: string = '';
  
  successMessage: string = '';
  form : FormGroup;
  working:boolean=false;
  empresas:any=[];
  clientes:any=[];
  constructor(private location:Location, public apiService:ApiService) { }

  ngOnInit() {

    this.apiService.Get("Companies/CantCompanies").then(res=>{
      
      this.empresas=res;
    });
    this.apiService.Get("Companies/CantCustomers").then(res=>{
      
      this.clientes=res;
    });
  }

}
