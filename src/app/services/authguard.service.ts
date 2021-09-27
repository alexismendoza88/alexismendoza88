import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router: Router) {
    
   }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      let uid= window.localStorage.getItem('tokenpd');
      if (uid=='' || uid==null) {
  console.log("ok");
        return true;
      }
    else{
      console.log("ok2");
      var data= JSON.parse(uid);
      if(data.role=="Customer")
      {
        document.getElementById("pedidos").style.display = 'none';
        return this.router.parseUrl("/solicitudelist");
      }
      else
      {
        return this.router.parseUrl("/companysol");
      } 
    }

  }
}
