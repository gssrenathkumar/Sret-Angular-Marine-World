import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'level3';
  
  mobileinfo = [
    {
    name: 'Whales',
    family:'Selachimorpha',
    types:"24"},
    
    {
    name:'Dolphins',
    family:'Delphinidae',
    types:"45"},
  
    {
    name:'Crocodiles',
    family:'Crocodylidae',
    types:'19'
    },
    {
    name:'Turtles',
    family:'amniotes',
    types:"25"},
    {
      name:'Snakes',
      family:'Animalia',
      types:"115"},
      {
        name:'Sea Lions',
        family:'Eared seal',
        types:"78"},
        {
          name:'Rays',
          family:'Batoidea',
          types:"156"},
    ]

    color='darkblue';
    updateColor()
{
this.color="black"
}

image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRacZ6YpMzlZcmAisAfK5DXSz4qiI920QXaINsOABrDujQVTHS-CVErUhq74vPTxPKa8&usqp=CAU";
image1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRacZ6YpMzlZcmAisAfK5DXSz4qiI920QXaINsOABrDujQVTHS-CVErUhq74vPTxPKa8&usqp=CAU";
name="";

clickMe(){
  alert("Data Imported Successfully")
}
user=[
  {name:'Fishes',types:39,location:'Maldina tri point'},
  {name:'Dolphins',types:22,location:'Aldives'},
  {name:'Sharks',types:30,location:'Australia'}
]



}
