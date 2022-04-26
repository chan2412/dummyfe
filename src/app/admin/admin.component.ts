import { Component, OnInit } from '@angular/core';
import { changepassword } from '../signin/patient';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
   var d={ID:this.userdata.ID}
   var m=Object.assign(d,this.changepassword);
   console.log(m);
   if(this.userdata.hospital=='Hospital1'){
    this.http.post<any>("http://localhost:3000/o1/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
  else if(this.userdata.hospital=='Hospital2'){
    this.http.post<any>("http://localhost:3000/o2/changepassword",m).subscribe(data=>{
      console.log(data);
    });
    }
  }

}
