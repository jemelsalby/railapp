import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrain',
  templateUrl: './viewalltrain.component.html',
  styleUrls: ['./viewalltrain.component.css']
})
export class ViewalltrainComponent implements OnInit {

  constructor() { }

status:boolean=false

name="bullet"

read=()=>{
  this.name="venu"
  this.status=true
}

  ngOnInit(): void {
  }

}
