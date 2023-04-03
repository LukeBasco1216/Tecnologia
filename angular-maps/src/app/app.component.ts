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
  label : string;

// può essere fatto in questo modo fuori dal constructor
  coordC={lat: 45.516513, lng: 9.159780};
  nome = "casa";

  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
  }

}
