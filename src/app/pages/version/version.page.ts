import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BusyService } from '../../services/busy.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-version',
  templateUrl: './version.page.html',
  styleUrls: ['./version.page.scss'],
})
export class VersionPage implements OnInit {
  errorMessage: string = '';
  
  successMessage: string = '';
  form : FormGroup;
  working:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
