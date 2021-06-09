import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRacZ6YpMzlZcmAisAfK5DXSz4qiI920QXaINsOABrDujQVTHS-CVErUhq74vPTxPKa8&usqp=CAU";
image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRacZ6YpMzlZcmAisAfK5DXSz4qiI920QXaINsOABrDujQVTHS-CVErUhq74vPTxPKa8&usqp=CAU";
name="";

clickMe(){
  alert("Data Imported Successfully.Details will be sent shortly")
}


}
