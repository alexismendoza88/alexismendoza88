import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';
@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  transform(d: any): string {
    moment.locale('es');
    var date= new Date(d);
    //date.setHours(date.getHours() + 2)
   return moment(date).fromNow();
  }
}
