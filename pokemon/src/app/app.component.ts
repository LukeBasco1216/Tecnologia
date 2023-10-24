import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type } from 'src/model/type.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemon';
  obstype : Observable<type[]> = undefined!;
  data : type[] = undefined!;

  constructor(private http:HttpClient){
    }


  ngOnInit(): void {
    this.obstype = this.http.get<type[]>('https://pokeapi.co/api/v2/type'),
    this.obstype.subscribe(this.getdata)
  }
  
  getdata = (data:type[]) => {
    this.data = data;
  }




}
