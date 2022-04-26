import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labstaff',
  templateUrl: './labstaff.component.html',
  styleUrls: ['./labstaff.component.css']
})
export class LabstaffComponent implements OnInit {
  userdata:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('curruser');
    this.userdata=JSON.parse(this.userdata);
  // this.userdata=this.userdata[0];
    console.log(this.userdata)
  }

}
