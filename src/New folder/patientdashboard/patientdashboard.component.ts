import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {
  public users:any;
public reqs:any;
public rems:any;
public res:any;
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

  constructor(private el:ElementRef,private http:HttpClient,private route:Router,private ds:DataserviceService) { }

  async ngOnInit() {
  this.res=localStorage.getItem('Request')?JSON.parse(localStorage.getItem('Request')||'[]'):[];
    this.act=this.actarr[0];
    const source = interval(3000);
this.subscription = source.subscribe(val => this.opensnack());
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login');
    this.userdata=JSON.parse(this.userdata);
   
    console.log(this.userdata);
    if( this.userdata&& this.userdata.role=='patient')
    {
      this.users=await this.ds.getDoctors(this.userdata.hospital);
      this.reqs=await this.ds.getPatient(this.userdata.hospital,{username:this.userdata.username});
      console.log(this.reqs,this.users[0].Record);
      var o=0;
      if(this.reqs.doc){
      for(var j=0;j<this.users.length;j++)
      {
        for(var i=0;i<this.reqs.doc.length;i++)
        { 
         if(this.users[j].Record.username==this.reqs.doc[i].usr)
         {
          this.users[j].Record=await Object.assign({active:this.reqs.doc[i].active},this.users[j].Record); 
          console.log(this.users[j].Record,this.users[j].Record.username,this.reqs.doc[i].usr,"64");
         }
         else{
          this.users[j].Record=await Object.assign({active:0},this.users[j].Record); 
          console.log(this.users[j].Record,this.users[j].Record.username,this.reqs.doc[i].usr,"68");
         }
        }
      }
      }
      else{
        for(var i=0;i<this.users.length;i++)
        {
          this.users[i].Record=await Object.assign({active:0},this.users[i].Record);
          console.log(this.users[i].Record);
        }
      }

    }
    else
    {
      this.route.navigate(['/signin']);
    }
  }
  async opensnack(){
   // this.users=await this.ds.getDoctors(this.userdata.hospital);
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
        async activaterequest(subModule:any,val:any){
          this.users[subModule].Record.active=val;
          let Var={from:this.userdata.username,to:this.users[subModule].Record.username,change:0};
          this.res.push(Var);
          console.log(Var);
         console.log(await this.ds.sendRequest(this.userdata.hospital,Var));
          const jsonData = JSON.stringify(this.res);
          localStorage.setItem('Request', jsonData);
          var x=localStorage.getItem("Request");
          console.log(x);
        }
      
}
