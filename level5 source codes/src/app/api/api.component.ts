import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  
  constructor(private http:HttpClient){}

  onSubmit(data: any)
  {
  this.http.post('http://localhost:4200',data)
  .subscribe((result: any) =>{console.warn("result",result)
  })
  console.warn(data);
  }
  ngOnInit(): void {
  }

}
