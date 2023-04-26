import { Component,ViewChild, AfterViewInit   } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  geoJsonObject : GeoFeatureCollection;
  fillColor: string = "#FF0000";  //Colore delle zone catastali
 
  markerList : google.maps.MarkerOptions[] | undefined;
  zoom = 8;

  constructor() {

    //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file     geojson.model.ts
    this.geoJsonObject = GEOJSON;  
    console.log(this.geoJsonObject); //stampo l'oggetto geoJsonObject sulla console
  }

  ///////////////////

  @ViewChild('mapRef') mapRef: GoogleMap ; // Ottiene l’oggetto GoogleMap
  ngAfterViewInit() { //  do è stata inizializzata l’interfaccia
    this.mapRef.data.addGeoJson(this.geoJsonObject); // Aggiungo l’oggetto geoJson alla mappa
    this.mapRef.data.setStyle(this.styleFunc)
  }

  styleFunc = (feature: any) =>{
    console.log(feature.i.properties.id)
    let newColor = "#FF0000"; //RED
    if(feature.i.properties.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
      clickable: true,
      fillColor: this.fillColor,
      strokeWeight: 1
    });
  }


  ////////////////////

  markerGenerator()
  {
    this.markerList =[
      {
        position : {
          lng : this.geoJsonObject.features[0].geometry.coordinates[0][0][0],
          lat : this.geoJsonObject.features[0].geometry.coordinates[0][0][1]
        },
        label: String(this.geoJsonObject.features[0].properties.id),
      },
      {
        position : {
          lng : this.geoJsonObject.features[1].geometry.coordinates[0][0][0],
          lat : this.geoJsonObject.features[1].geometry.coordinates[0][0][1]
        },
        label: String(this.geoJsonObject.features[1].properties.id),
      },
    ]

  }
  
}

