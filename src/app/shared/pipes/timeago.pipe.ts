import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(d: any): string {

    let currentDate = new Date(new Date().toUTCString());
    let date = new Date(d + "Z");

    let year = currentDate.getFullYear() - date.getFullYear();
    let month = currentDate.getMonth() - date.getMonth();
    let day = currentDate.getDate() - date.getDate();
    let hour = currentDate.getHours() - date.getHours();
    let minute = currentDate.getMinutes() - date.getMinutes();
    let second = currentDate.getSeconds() - date.getSeconds();

    let createdSecond = (year * 31556926) + (month * 2629746) + (day * 86400) + (hour * 3600) + (minute * 60) + second;

    if (createdSecond >= 31556926) {
      let yearAgo = Math.floor(createdSecond / 31556926);
      return yearAgo > 1 ? "Hace " + yearAgo + " Años" :"Hace " +  yearAgo + " Año";
    } else if (createdSecond >= 2629746) {
      let monthAgo = Math.floor(createdSecond / 2629746);
      return monthAgo > 1 ? "Hace " +  monthAgo + " Meses" : "Hace " + monthAgo + " Mes";
    } else if (createdSecond >= 86400) {
      let dayAgo = Math.floor(createdSecond / 86400);
      return dayAgo > 1 ? "Hace" + dayAgo + " Dias" : "Hace " + dayAgo + " Dia";
    } else if (createdSecond >= 3600) {
      let hourAgo = Math.floor(createdSecond / 3600);
      return hourAgo > 1 ? "Hace " +  hourAgo + " Hora" : "Hace " + hourAgo + " Horas";
    } else if (createdSecond >= 60) {
      let minuteAgo = Math.floor(createdSecond / 60);
      return minuteAgo > 1 ? "Hace " + minuteAgo + " Minutos" :"Hace " +  minuteAgo + " Minuto";
    } else if (createdSecond < 60) {
      return createdSecond > 1 ? "Hace " + createdSecond + " Segundos" :"Hace " +  createdSecond + " Segundo";
    } else if (createdSecond < 0) {
      return "0 Segundo";
    }
  }

}
