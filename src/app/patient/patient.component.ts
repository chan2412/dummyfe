import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { changepassword } from '../signin/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
public userdata:any;
public show=false;
public housefull:any;
  public changepassword=new changepassword("","","");
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('curruser');
    this.userdata=JSON.parse(this.userdata);
    console.log(this.userdata)
  }
  offclick(){
    //console.log(this.changepassword);
    this.show=!this.show;
  }
  onclick(){
    console.log(this.changepassword);
    var d={username:this.userdata.username}
   var m=Object.assign(d,this.changepassword);
   console.log(m);
   if(this.userdata.hospital=='Hospital1'){
    this.http.post<any>("http://localhost:5000/o1/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
  else if(this.userdata.hospital=='Hospital2'){
    this.http.post<any>("http://localhost:5000/o2/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
  }
}
