import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlemaps';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  circleOptions : any;
  label : string;
  markerOptions: google.maps.MarkerOptions;

  markerOptionsbear: google.maps.MarkerOptions;
  markerOptionselephant: google.maps.MarkerOptions;
  markerOptionscow: google.maps.MarkerOptions;

// può essere fatto in questo modo fuori dal constructor
  coordC={lat: 45.516513, lng: 9.159780};
  nome = "casa";
  colour = {fillColor : 'red'}

  coordbear={lat: 45.507525, lng: 9.190318};
  coordelephant={lat: 45.506978, lng: 9.191479};
  coordcow={lat: 45.506252, lng: 9.189657};

  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = this.colour

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptions = {icon:iconData}



    let iconDatabear : google.maps.Icon = {
      url:'./assets/img/icons8-bear-16.png',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptionsbear = {icon:iconDatabear}

    let iconDataelephant : google.maps.Icon = {
      url:'./assets/img/icons8-elephant-16.png',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptionselephant = {icon:iconDataelephant}

    let iconDatacow : google.maps.Icon = {
      url:'./assets/img/icons8-cow-16.png',
      scaledSize : new google.maps.Size(60,60)
    }
  
    this.markerOptionscow = {icon:iconDatacow}
  }
  
  red() : void
  {
    this.circleOptions = {fillColor : 'red'}
  }

  yellow() : void
  {
    this.circleOptions = {fillColor : 'yellow'}
  }

  green() : void
  {
    this.circleOptions = {fillColor : 'green'}
  }

}
