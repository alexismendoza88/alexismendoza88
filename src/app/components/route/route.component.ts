import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { BusyService } from '../../services/busy.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { ModalController} from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google: any;

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent implements OnInit {

  @ViewChild("map", {static: false}) mapelement: ElementRef;
  @ViewChild('googleplaces', {static: true}) googlePlaces: any;
  marker:any;
  map:any;
  lat:any=null;
  lng:any=null;
  distance:any=null;
  duration:any=null;
  directionsService:any = new google.maps.DirectionsService;
  directionsDisplay:any = new google.maps.DirectionsRenderer;
  constructor(private nativeGeocoder:NativeGeocoder,private busyService:BusyService,public platform:Platform,private geolocation:Geolocation, private modalCtrl:ModalController) { 


  }

  async ngOnInit() {
    let dest= JSON.parse( window.localStorage.getItem("mapdest"));
    console.log(dest);
    this.lat=dest.lat;
    this.lng=dest.lng;
    this.platform.ready().then(async () => {
      this.mapelement.nativeElement.style.width= this.platform.width() +"px";
      this.mapelement.nativeElement.style.height= this.platform.height() +"px";
      let load=await  this.busyService.presentProAlert();
      load.present();
      this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 8000, enableHighAccuracy: true }).then((resp) => {
        load.dismiss();
        let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: mylocation,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false
        });
        console.log(mylocation);
       this.startNavigating2(mylocation, new google.maps.LatLng(this.lat,this.lng));
  
      },err=>{
        load.dismiss();
      });
    });
  }

  async startNavigating2(origin:any,destination:any){
    let load= await this.busyService.presentProAlert();
    load.present();
     if(  this.directionsDisplay!=null)
     {
       this.directionsDisplay.setMap(null);
     }
     this.directionsService = new google.maps.DirectionsService;
     this.directionsDisplay =  new google.maps.DirectionsRenderer({ preserveViewport: true});
     this.directionsDisplay.setMap(this.map);
     this.directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode['DRIVING']
    },async (res, status) => {
        load.dismiss();
        if(status == google.maps.DirectionsStatus.OK){
          this.distance=res.routes[0].legs[0].distance.text;
          this.duration=res.routes[0].legs[0].duration.text;
           this.directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }
   
    });
   
   }
   
  close(){
    this.modalCtrl.dismiss(null);
  }

  drawubicationcontrol()
  {
      
  var controlDiv = document.createElement('div');

  var firstChild = document.createElement('button');
  firstChild.id="locatiobtn";
  firstChild.style.backgroundColor = '#fff';
  firstChild.style.border = 'none';
  firstChild.style.outline = 'none';
  firstChild.style.width = '28px';
  firstChild.style.height = '28px';
  firstChild.style.borderRadius = '2px';
  firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
  firstChild.style.cursor = 'pointer';
  firstChild.style.marginRight = '10px';
  firstChild.style.padding = '0';
  firstChild.title = 'Your Location';
  controlDiv.appendChild(firstChild);

  var secondChild = document.createElement('div');
  secondChild.style.margin = '5px';
  secondChild.style.width = '18px';
  secondChild.style.height = '18px';
  secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
  secondChild.style.backgroundSize = '180px 18px';
  secondChild.style.backgroundPosition = '0 0';
  secondChild.style.backgroundRepeat = 'no-repeat';
  firstChild.appendChild(secondChild);
  firstChild.addEventListener('click',  ()=> {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 8000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
      this.lng=resp.coords.longitude;
      this.lat=resp.coords.latitude;
    this.map.setCenter(mylocation);
    this.startNavigating2(mylocation, new google.maps.LatLng(this.lat,this.lng));
    });
});

  google.maps.event.addListener(this.map, 'center_changed',  ()=> {
      secondChild.style['background-position'] = '0 0';
  });

  this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}



}
