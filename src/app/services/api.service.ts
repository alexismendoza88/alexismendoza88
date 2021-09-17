import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpEvent,HttpRequest} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map ,catchError,take} from 'rxjs/operators';
import { of,throwError,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  Post(data:any,url:string):Promise<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options={
      headers:headers
    }
      return new Promise((resolve, reject) => {
        this.http.post(environment.apiurl+ url, data,options)
        .pipe(
          map(res => {
            return res;
          
          }),
          catchError(err => {
              console.log('caught mapping error and rethrowing', err);
              return throwError(err);
          }),
          catchError(err => {
              console.log('caught rethrown error, providing fallback value',err);
              return throwError(err);
          })
      )
      .subscribe(
          res => resolve(res),
          err => reject(err)
      );
    });
    
  } 

  Put(data:any,url:string):Promise<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options={
      headers:headers
    }
      return new Promise((resolve, reject) => {
        this.http.put(environment.apiurl+ url, data,options)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
  } 
  upload(url: string,formData:any): Observable<HttpEvent<any>> {

    const options = {
      reportProgress: true
    };

    const req = new HttpRequest('POST', environment.apiurl+ url, formData, options);
    return this.http.request(req);
  }
  Delete(url:string):Promise<any>{

    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiurl+ url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }); 
    }
  Get(url:string):Promise<any>{

    return new Promise((resolve, reject) => {
      this.http.get(environment.apiurl+ url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    }); 
    }
}
