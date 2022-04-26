import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DignosisReport } from '../signin/patient';
import { interval } from 'rxjs';
@Component({
  selector: 'app-labstaffdashboard',
  templateUrl: './labstaffdashboard.component.html',
  styleUrls: ['./labstaffdashboard.component.css']
})
export class LabstaffdashboardComponent implements OnInit {
  public users=[] as any;
  public userarr:any;
  public userdata:any;
  public sidebar:any;
  public sidebarBtn:any;
  public subscription: any;
  public act: any;  
  public report=new DignosisReport('Select a username','','Select a gender','','','','','','','','','Select an Outcome');
  public genders=['male','female','others'];
  public outcomess=['male','female','others'];
  public actarr = ['dashboard', 'patients', 'adddiagnosis','profile','getdiagnosis'];
  public sidearr =
  [{ Name: 'Dashboard', active:true },
  { Name: 'Patients', active: false },
  { Name: 'Add Diagnosis Report', active: false },
  { Name: 'Get Diagnosis Report', active: false },
  ];
  constructor(private el:ElementRef,private http:HttpClient,private route:Router) { }
  ngOnInit(): void {
    this.act=this.actarr[0];
    this.userarr=new Set<string>();
    const source = interval(3000);
this.subscription = source.subscribe(val => this.opensnack());
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login');
    this.userdata=JSON.parse(this.userdata);
    console.log(this.userdata);
    if( this.userdata&&this.userdata.role=="labstaff"){
      this.http.get<any>('http://localhost:5000/o1/users').subscribe(data => {
        for(var q=0;q<data.length;q++)
        {
          this.users.push(data[q]);
         // console.log(data[q]);
        }
        //console.log(this.users);
        for(var i=0;i<this.users.length;i++)
  {
    this.userarr.add(this.users[i].username);
  }
        console.log(data);
    })
      this.http.get<any>('http://localhost:5000/o2/users').subscribe(data => {
        for(var q=0;q<data.length;q++)
        { console.log(data[q]);
          this.users.push(data[q].Record);
        }
      for(var i=0;i<this.users.length;i++)
  {
    this.userarr.add(this.users[i].username);
  }
      console.log(data);
  })
    }
  
  else{
    this.route.navigate(['/signin']);
  }
  
}
opensnack(){
  if(this.userdata.hospital=='Hospital1'){
    this.http.get<any>('http://localhost:5000/o1/users').subscribe(data => {
      this.users=data;
      for(var i=0;i<this.users.length;i++)
{
  this.userarr.add(this.users[i].Record.username);
}
console.log(this.userarr)
      console.log(data);
  })
  }
  else if(this.userdata.hospital=='Hospital2'){
    this.http.get<any>('http://localhost:5000/o2/users').subscribe(data => {
    this.users=data;
    for(var i=0;i<this.users.length;i++)
{
  this.userarr.add(this.users[i].Record.username);
}
    console.log(data);
})
  }
}

  onc(){
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
  this.act = ff;
  console.log(this.act);
}
oncal(){
  console.log(this.report);
  var rep={
    pregnancies:this.report.pregnancies,
    blood_pressure:this.report.pregnancies,
    glucose:this.report.glucose,
    skin_thickness : this.report.skin_thickness,
    insulin : this.report.insulin,
    BMI : this.report.bmi,
    DPF : this.report.diabetespedigreefunction,
    age: this.report.patient_age
  }
  this.http.post<any>('http://127.0.0.1:5500/userinput',rep).subscribe(data=>{
    if(data==0)
    {
      this.report.outcome="negative";
    }else{
    this.report.outcome="positive";
    }
    console.log(data);
  })
}
onsub(){
  console.log(this.report);
  this.report.labstaff_username=this.userdata.username;
  if(this.userdata.hospital=='Hospital1'){
  this.http.post<any>('http://localhost:4500/o1/addreport',this.report).subscribe(data=>{
    console.log(data);
  })
}
else if(this.userdata.hospital=='Hospital2'){
  this.http.post<any>('http://localhost:4500/o2/addreport',this.report).subscribe(data=>{
    console.log(data);
  })
}
}
}
