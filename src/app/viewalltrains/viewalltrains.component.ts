import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor() { }

name="bullet"

read=()=>{
  this.name="raju"
}

  ngOnInit(): void {
  }

}
