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
  public users=[{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  },{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  },{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  },{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  },{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  },{
    Record:{
      firstname:"Avinash",
      lastname:"B",
      speciality:"MBBS",
      hospital:"hospital1"
    }
  }];

public acct:any;
public userdata:any;
public sidebar:any;
public sidebarBtn:any;
public subscription: any;
public act: any;
public sidearr =
  [{ Name: 'Dashboard', active:true },
  { Name: 'doctor', active: false }
  ];
  public actarr = ['dashboard','doctor','profile', 'labstaff', 'docsignup', 'labstaffsignup'];
  public actreq=['Doctor1','Doctor2','Doctor3','Doctor4','Doctor5','Doctor6']
  public sidereq=[{Name:'Doctor1',active:true},
  {Name:'Doctor2',active:true},
  {Name:'Doctor3',active:true},
  {Name:'Doctor4',active:true},
  {Name:'Doctor5',active:true},
  {Name:'Doctor6',active:true}];

  constructor(private el:ElementRef,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.act=this.actarr[0];
    const source = interval(3000);
this.subscription = source.subscribe(val => this.opensnack());
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login');
    this.userdata=JSON.parse(this.userdata);
    
    console.log(this.userdata);
    if( this.userdata&& this.userdata.role=='patient'){
    if(this.userdata.hospital=='Hospital1'){
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

activateClass(subModule:any){
  for(let i = 0; i < this.sidearr.length; i++){
    this.sidearr[i].active = false;
  }
  this.sidearr[subModule].active = !this.sidearr[subModule].active;    
}

changeact(ff: any) {
  this.act = this.actarr[ff];
  console.log(this.act);
}

public request=true;
//btnVal1 = "Request";
public btnVal2 = "Request Sent";
//button click function
changeText()
      {
        this.request =!this.request
        this.btnVal2="Request Sent"
        
        }
        //this.btnVal1.disabled=false;

        changearr(ff:any){
          this.acct=this.actreq[ff];
          console.log(this.acct);
        }
        activaterequest(subModule:any){
         // for(let i=0;i<this.sidereq.length;i++){
           // this.sidereq[i].active=true;
          //}
          this.sidereq[subModule].active=!this.sidereq[subModule].active;
        }
      
}
