import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
public userdata:any;
  constructor() { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('curruser');
    this.userdata=JSON.parse(this.userdata);
    this.userdata=this.userdata[0];
    console.log(this.userdata)
  }

}
