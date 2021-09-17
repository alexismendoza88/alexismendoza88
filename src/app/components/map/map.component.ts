import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { BusyService } from '../../services/busy.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { ModalController} from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild("map", {static: false}) mapelement: ElementRef;
  @ViewChild('googleplaces', {static: true}) googlePlaces: any;
  marker:any;
  map:any;
  gbinput:any;
  lat:any=null;
  lng:any=null;
  dir:any;
  constructor(private nativeGeocoder:NativeGeocoder,private busyService:BusyService,public platform:Platform,private geolocation:Geolocation, private modalCtrl:ModalController) { 


  }

  async ngOnInit() {
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
        this.map.addListener('click',  (event) =>{
          this.drawmarker(event.latLng);
          this.locationtoview(event.latLng);
          this.lng=event.latLng.lng;
          this.lat=event.latLng.lat;
          if (!(typeof event.placeId =='undefined')) {     
            event.stop();        
          }
        });
        this.drawmarker(mylocation);
        this.autocmplete();
        this.locationtoview(new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude));
        this.lng=resp.coords.longitude;
        this.lat=resp.coords.latitude;
        this.drawubicationcontrol();
      },err=>{
        load.dismiss();
      });
    });
  }
  close(){
    this.modalCtrl.dismiss(null);
  }
  addToCordinates(){
    this.modalCtrl.dismiss({lat:this.lat,lng: this.lng,dir:document.getElementById('googleplaces').getElementsByTagName('input')[0].value});
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
      this.drawmarker(mylocation);
    this.map.setCenter(mylocation);
     this.locationtoview(mylocation);
    });
});

  google.maps.event.addListener(this.map, 'center_changed',  ()=> {
      secondChild.style['background-position'] = '0 0';
  });

  this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}
drawmarker(location:any){
  if(this.marker!=null)
  {
    this.marker.setMap(null);
  }
  this.marker= new google.maps.Marker({
    position: location,
    map: this.map,
    animation:"DROP" ,//google.maps.Animation.DROP,
    title: '¡ Estoy aqui !',
    travelMode: 'DRIVING',
  });
}
 locationtoview(location:any){
  var geocoder = new google.maps.Geocoder;
  geocoder.geocode({'location': location}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        document.getElementById('googleplaces').getElementsByTagName('input')[0].value=results[0].formatted_address;
       // document.getElementById('googleplaces').getElementsByTagName('input')[0].setAttribute("readonly","readonly");
      } else {
        window.alert('No results found');
        this.gbinput.value="";
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
      this.gbinput.value="";
    }
  });
 
}
 onClear(event){
  if(this.marker!=null)
  {
    this.marker.setMap(null);
  }
  document.getElementById('googleplaces').getElementsByTagName('input')[0].removeAttribute("readonly");
  document.getElementById('googleplaces').getElementsByTagName('input')[0].value="";
 }
  autocmplete()
  {
  
    let autocompleted = new google.maps.places.Autocomplete(document.getElementById('googleplaces').getElementsByTagName('input')[0]);
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocompleted.bindTo('bounds',this. map);
  
    // Set the data fields to return when the user selects a place.
    autocompleted.setFields(
        ['address_components', 'geometry', 'icon', 'name']);
    //let autocomplete = new google.maps.places.Autocomplete(this.googlePlaces.nativeElement, {types: ['geocode']});
    google.maps.event.addListener(autocompleted, 'place_changed', () => {
      // retrieve the place object for your use
     // document.getElementById('googleplaces').getElementsByTagName('input')[0].setAttribute("readonly","readonly");
      let place = autocompleted.getPlace();
      this.drawmarker(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
      this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
 
    });
  
  }
}
