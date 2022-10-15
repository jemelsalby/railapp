import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchdata()
   }

  fetchdata=()=>{
    this.api.view().subscribe(
      (data)=>{this.list=data}
    )
  }

  list:any=[]
  ngOnInit(): void {
  }

}
