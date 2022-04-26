import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { changepassword } from '../signin/patient';

@Component({
  selector: 'app-labstaff',
  templateUrl: './labstaff.component.html',
  styleUrls: ['./labstaff.component.css']
})
export class LabstaffComponent implements OnInit {
  userdata:any;
 
  public housefull:any;
  public changepassword=new changepassword("","","");
  public showmycontainer=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.userdata=localStorage.getItem('curruser');
    this.userdata=JSON.parse(this.userdata);
  // this.userdata=this.userdata[0];
    console.log(this.userdata)
  }

  offclick(){
    //console.log(this.changepassword);
    this.showmycontainer=!this.showmycontainer;
  }
  onclick(){
    console.log(this.changepassword);
    var d={username:this.userdata.username}
   var m=Object.assign(d,this.changepassword);
   console.log(m);
   if(this.userdata.hospital=='Hospital1'){
    this.http.post<any>("http://localhost:4500/o1/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
  else if(this.userdata.hospital=='Hospital2'){
    this.http.post<any>("http://localhost:4500/o2/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
    else if(this.userdata.hospital=='Laboratory'){
      this.http.post<any>("http://localhost:4500/o3/changepassword",m).subscribe(data=>{
        console.log(data);
      });
      }
  }
}
