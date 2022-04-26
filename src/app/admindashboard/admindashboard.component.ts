import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Doctor, Labstaff } from '../signin/patient';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  public users: any;
  public userdata: any;
  public doctors: any;
  public labstaffs: any;
  public patients: any;
  public act: any;
  public dummy:any;
  public actarr = ['dashboard', 'patient', 'doctor', 'labstaff', 'docsignup', 'labstaffsignup','profile'];
  public sidearr =
    [{ Name: 'Dashboard', active: true },
    { Name: 'Patients', active: false },
    { Name: 'Doctors', active: false },
    { Name: 'Labstaffs', active: false },
    { Name: 'Add Doctor', active: false },
    { Name: 'Add Labstaff', active: false }];
  public Doctor = new Doctor('', '', '', '', '', '', 'Select a gender','','','','password','Select a Hospital');
  public Labstaff = new Labstaff('', '', '', '', '', '', 'Select a gender','','','','password','Select a Hospital');
  public hospitals = ['Hospital1', 'Hospital2'];
  public genders=['male','female','others'];
  public sidebar: any;
  public sidebarBtn: any;
  sidebarToggle: any;
  modeToggle: any;
  body: any;
  constructor(private el: ElementRef, private http: HttpClient,private route:Router,private ds:DataserviceService) { }
jj(){
  this.http.post<any>("http://localhost:4000/o1/user", this.Doctor).subscribe(data => {
    this.dummy=data;
   });
   console.log(this.dummy);
this.http.post<any>("http://localhost:4000/o1/deleteuser",this.dummy.id).subscribe(data => {
     console.log("helloi");
   })
}
  ngOnInit(): void {
    this.body=this.el.nativeElement.querySelector(".body");
  this.modeToggle =  this.el.nativeElement.querySelector(".mode-toggle");
  this.sidebar =  this.el.nativeElement.querySelector("nav");
  this.sidebarToggle =  this.el.nativeElement.querySelector(".sidebar-toggle");
    this.sidebarBtn = this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata = localStorage.getItem('login');
    this.userdata = JSON.parse(this.userdata);
    console.log(this.userdata);
    console.log(this.body);
    console.log(this.sidebar);

    
let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
this.body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
this.sidebar.classList.toggle("close");
}


    this.http.get<any>('http://localhost:3000/api/users').subscribe(data => {
      this.users = data;
      console.log(data);
    });
if(this.userdata && this.userdata.role=='admin'){
    if (this.userdata.hospital == 'Hospital1') {
      this.http.get<any>('http://localhost:4000/o1/users').subscribe(data => {
        this.doctors = data;
        console.log(this.doctors.length);
      })
      this.http.get<any>('http://localhost:5000/o1/users').subscribe(data => {
        this.patients = data;
        console.log(this.patients.length);
      })
      this.http.get<any>('http://localhost:4500/o1/users').subscribe(data => {
        this.labstaffs = data;
        console.log(this.labstaffs.length);
      })
    }
    else if (this.userdata.hospital == 'Hospital2') {

      this.http.get<any>('http://localhost:4000/o2/users').subscribe(data => {
        this.doctors = data;
        console.log(data);
      })
      this.http.get<any>('http://localhost:5000/o2/users').subscribe(data => {
        this.patients = data;
        console.log(data);
      })
      this.http.get<any>('http://localhost:4500/o2/users').subscribe(data => {
        this.labstaffs = data;
        console.log(data);
      })
    }
  }
  else{
    this.route.navigate(['/signin']);
  }
    this.act = this.actarr[0];
  }

  ofc1() {
    this.sidebar.classList.toggle("close");
    if(this.sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
    }

    ofc2(){
      this.body.classList.toggle("dark");
      if(this.body.classList.contains("dark")){
          localStorage.setItem("mode", "dark");
      }else{
          localStorage.setItem("mode", "light");
      }
      }

  onc() {
    this.sidebar.classList.toggle("active");
    if (this.sidebar.classList.contains("active")) {
      this.sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
      this.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

  async onDocR() {

    console.log(this.Doctor);
    var data=await this.ds.createDoctor(this.Doctor.hospital,this.Doctor);
    if(data.id=="User Already Exists")
    {
      alert(data.id)
    }
    else{
      alert("User SuccessFully Registered")
    }
  }


  onLabR() {

    console.log(this.Labstaff);
    if (this.Labstaff.hospital === 'Hospital1') {
      this.http.post<any>("http://localhost:4500/o1/user", this.Labstaff).subscribe(data => {
        console.log("helloi");
      })
    }
    else if (this.Labstaff.hospital === 'Hospital2') {
      this.http.post<any>("http://localhost:4500/o2/user", this.Labstaff).subscribe(data => {
        console.log("helloi");
      })
    }
  }
 
  


  activateClass(subModule:any){
    for(let i = 0; i < this.sidearr.length; i++){
      this.sidearr[i].active = false;
    }
    this.sidearr[subModule].active = !this.sidearr[subModule].active;    
  }
  changeact(ff: any) {
    this.act = ff;
    console.log(this.act);
  }

}
