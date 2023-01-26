import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first-routed-app';
  obsTrack : Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public SpotifyService : SpotifyService){
    this.obsTrack = SpotifyService.searchTrack("lateralus");
    this.obsTrack.subscribe((data)=>console.log(data)); //visualizzo la ricerca sulla console
  } 

}
