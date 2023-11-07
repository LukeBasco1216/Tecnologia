import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { datatype } from 'src/model/datatype.model';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemon';
  // obstype : Observable<datatype[]> = undefined!;
  // data : datatype[] = undefined!;

  constructor(private http:HttpClient){
    }


  ngOnInit(): void {
    // this.obstype = this.http.get<datatype[]>('https://pokeapi.co/api/v2/type'),
    // this.obstype.subscribe(this.getdata)
  }
  
  // getdata = (data:datatype[]) => {
  //   this.data = data;
  // }

}
