import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  macchine : string[];
  constructor() { 
    this.macchine = ["escavatori","terne","bulldozer","dumpers","pale","finitrici","minipale","motolivellatrice","rulli compattatori","piastre vibranti"]
  }

  ngOnInit(): void {
  }

}
