import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {
  public users:any;
public userdata:any;
public sidebar:any;
public sidebarBtn:any;
public subscription: any;
public act: any;
  public actarr = ['dashboard', 'profile', 'doctor', 'labstaff', 'docsignup', 'labstaffsignup'];

  constructor(private el:ElementRef,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.act=this.actarr[0];
    const source = interval(3000);
this.subscription = source.subscribe(val => this.opensnack());
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login');
    this.userdata=JSON.parse(this.userdata);
    var mk={ ID: '12', 
    firstname: 'Car',
    lastname: 'Gartsyde',
     hospital: 'Hospital1', 
     speciality: 'cardiology',
      username:'name1',
    password:'pwd'}
    console.log(this.userdata);
    if(this.userdata.role=='patient'){
    if(this.userdata.hospital=='Hospital1'){
      this.http.post<any>('http://localhost:4000/o1/user',mk).subscribe(data => {
        this.users=data;
        console.log(data);
    })
    this.http.post<any>('http://localhost:4000/o1/deleteuser',{content:mk.username}).subscribe(data => {
      this.users=data;
      console.log(data);
  })
     this.http.get<any>('http://localhost:4000/o1/users').subscribe(data => {
        this.users=data;
        console.log(data);
    })
    }
    else if(this.userdata.hospital=='Hospital2'){
      this.http.get<any>('http://localhost:4000/o2/users').subscribe(data => {
      this.users=data;
      console.log(data);
  })
    }}
    else{
      this.route.navigate(['/signin']);
    }
  }
  opensnack(){
    this.http.get<any>('http://localhost:4000/o1/users').subscribe(data => {
      this.users=data;
      console.log(data);
  })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onc(){
    this.sidebar.classList.toggle("active");
  this.sidebar.classList.toggle("active");
  if(this.sidebar.classList.contains("active")){
  this.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  this.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
changeact(ff: any) {
  this.act = this.actarr[ff];
  console.log(this.act);
}
}
