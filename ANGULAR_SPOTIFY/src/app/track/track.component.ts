import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/services/spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 

  track : any; //Qui salverò la traccia selezionata
  // location: any;
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }


  spotifyServiceObs : any;
  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (trackId); //Stampo su console  
    // this.service.getTrack(trackId); 
    this.spotifyServiceObs = this.service.getTrack(trackId) ;
    // codice non necessaria?
    this.spotifyServiceObs.subscribe((data: any)=>this.track = data)
  }

  // dalla riga 26 a 38 serve per prendere l'id del cansone e stamparlo nel console

  back() : void
  {
    this.location.back();
  }
}