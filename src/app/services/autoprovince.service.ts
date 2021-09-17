import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { environment } from '../../environments/environment';
import {AutoCompleteService} from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class AutoprovinceService implements  AutoCompleteService {

  labelAttribute = 'name';

  constructor(private http:HttpClient) {

  }

  getResults(keyword:string):Observable<any[]> {
    if(keyword==''){
      keyword='null';
    }
    let observable:Observable<any>;
    observable = this.http.get( environment.apiurl + "Provinces/autcomplete/" + keyword);
    return observable.pipe(
      map(
        (result) => {
          return result.filter(
            (item) => {
              return (item.name.toLowerCase().indexOf(
                  keyword.toLowerCase()
              ) > -1);
            }
          );
        }
      )
    );
  }
}
