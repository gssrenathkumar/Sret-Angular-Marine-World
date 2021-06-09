import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user=[
    {name:'Fishes',types:39,location:'Maldina tri point'},
    {name:'Dolphins',types:22,location:'Aldives'},
    {name:'Sharks',types:30,location:'Australia'}
  ]

}
