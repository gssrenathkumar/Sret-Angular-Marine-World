import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
this.color="red"
}


}
