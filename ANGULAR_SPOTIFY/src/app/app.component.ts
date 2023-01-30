import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newquery: string = "";
  title = 'first-routed-app';
  obsTrack: Observable<Object> | undefined ;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {
   
  }

  submit(newquery:HTMLInputElement): void {
    if (!newquery.value) {
      return;
    }
    this.newquery = newquery.value;
    this.obsTrack = this.spotify.searchTrack(this.newquery);
    this.obsTrack.subscribe((data) => this.results = data); 
  }


}
