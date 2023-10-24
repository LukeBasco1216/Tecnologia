import { Component, Input, OnInit } from '@angular/core';
import { type } from 'src/model/type.model';

@Component({
  selector: 'app-listatype',
  templateUrl: './listatype.component.html',
  styleUrls: ['./listatype.component.css']
})
export class ListatypeComponent implements OnInit{
  @Input() listatypes : type[] = undefined!;

  constructor(){}
  ngOnInit(): void {
    
  }

}
