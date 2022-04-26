import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alzheimer, Asthma, Cirrhosis, Cold, Diabetes, Diarrhea, DignosisReport, Fever, Heart, Hiv, Lungcancer, Malaria, Stomachcancer, StrokeDatabase, Tuberculosis } from '../signin/patient';
import { interval } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
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
  public useri:any;
  public genders=['male','female','others'];
  public outcomess=['male','female','others'];
  public username=['pat1','pat2'];
  public hospitalli=['Hospital1','Hospital2'];
  public actarr = ['dashboard', 'patients', 'adddiagnosis','profile','getdiagnosis','alzheimer','Asthma','Cirrhosis','Cold','Diabetes','Diarrhea','Fever','Heart','Hiv','Lungcancer','Malaria','Stomachcancer','StrokeDatabase','Tuberculosis'];
  public sidearr =
  [{ Name: 'Dashboard', active:true },
  { Name: 'Patients', active: false },
  { Name: 'Add Diagnosis Report', active: false },
  { Name: 'Add Alzheimer Report', active: false },
  { Name: 'Add Asthma Report', active: false },
  { Name: 'Add Cirrhosis Report', active: false },
  { Name: 'Add Cold Report', active: false },
  { Name: 'Add Diabetes Report', active: false },
  { Name: 'Add Diarrhea Report', active: false },
  { Name: 'Add Fever Report', active: false },
  { Name: 'Add Heart Report', active: false },
  { Name: 'Add Hiv Report', active: false },
  { Name: 'Add Lungcancer Report', active: false },
  { Name: 'Add Malaria Report', active: false },
  { Name: 'Add Stomachcancer Report', active: false },
  { Name: 'Add StrokeDatabase Report', active: false },
  { Name: 'Add Tuberculosis Report', active: false }
  ];
  public rep:any;
  public report=new DignosisReport('Select a patient','','Select a gender','','','','','','','','','Select an Outcome');
  public report1=new Alzheimer('','Select a gender','','','','','','Select a hospital','Select a patient','report','alzheimer');
  public report2=new Asthma('','Select a gender','','','','','Select a hospital','Select a patient','report','asthma');
  public report3=new Cirrhosis('','','','','','','','','','','','','','','','','','','Select a hospital','Select a patient','report','cirrhosis');
  public report4=new Cold('','Select a gender','','','','','','Select a hospital','Select a patient','report','cold');
  public report5=new Diabetes('','','','','','','','','','Select a hospital','Select a patient','report','diabetes');
  public report6=new Diarrhea('','Select a gender','','','','','','Select a hospital','Select a patient','report','diarrhea');
  public report7=new Fever('','','','','','','Select a hospital','Select a patient','report','fever');
  public report8=new Heart('','','','','','','','','','','','','','','Select a hospital','Select a patient','report','heart_disease');
  public report9=new Hiv('','Select a gender','','','','','','Select a hospital','Select a patient','report','hiv');
  public report10=new Lungcancer('Select a gender','','','','','','','','','','','','','','','Select a hospital','Select a patient','report','lung_cancer');
  public report11=new Malaria('','Select a gender','','','','','Select a hospital','Select a patient','report','malaria');
  public report12=new Stomachcancer('','Select a gender','','','','','','','Select a hospital','Select a patient','report','stomach_cancer');
  public report13=new StrokeDatabase('Select a gender','','','','','','','','','','','Select a hospital','Select a patient','report','stroke');
  public report14=new Tuberculosis('','Select a gender','','','','','','Select a hospital','Select a patient','report','tuberculosis');

  constructor(private el:ElementRef,private http:HttpClient,private route:Router,private ds:DataserviceService) { }
  ngOnInit(): void {
    this.act=this.actarr[0];
    this.userarr=new Set<string>();
    const source = interval(3000);
this.subscription = source.subscribe(val => this.opensnack());
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login'); 
    this.useri=JSON.parse(localStorage.getItem('curruser')||'{}');
    console.log(this.useri);
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
        { //console.log(data[q]);
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
  this.rep={
    pregnancies:this.report.pregnancies,
    blood_pressure:this.report.pregnancies,
    glucose:this.report.glucose,
    skin_thickness : this.report.skin_thickness,
    insulin : this.report.insulin,
    BMI : this.report.bmi,
    DPF : this.report.diabetespedigreefunction,
    age: this.report.patient_age
  }
  this.http.post<any>('http://127.0.0.1:5500/userinput',this.rep).subscribe(data=>{
    if(data==0)
    {
      this.report.outcome="negative";
    }else{
    this.report.outcome="positive";
    }
    console.log(data);
  })
}
onsub(n:any){
  //console.log(this.report);
  
  if(n==1)
  {
    this.rep=this.report1;
  
  }
  else if(n==2)
  {
    this.rep=this.report2;
  }
  else if(n==3)
  {
    this.rep=this.report3;
  }
  else if(n==4)
  {
    this.rep=this.report4;
  }
  else if(n==5)
  {
    this.rep=this.report5;
  }
  else if(n==6)
  {
    this.rep=this.report6;
  }
  else if(n==7)
  {
    this.rep=this.report7;
  }
  else if(n==8)
  {
    this.rep=this.report8;
  }
  else if(n==9)
  {
    this.rep=this.report9;
  }
  else if(n==10)
  {
    this.rep=this.report10;
  }
  else if(n==11)
  {
    this.rep=this.report11;
  }
  else if(n==12)
  {
    this.rep=this.report12;
  }
  else if(n==13)
  {
    this.rep=this.report13;
  }
  else if(n==14)
  {
    this.rep=this.report14;
  }
  this.rep.labstaff_username=this.userdata.username;
 var k=this.users.filter((el:any)=>{
   return el.username==this.rep.patient_username
 })
 k=k[0];
 
 this.rep.hospital=k.hospital;
 this.rep.age=k.age;
 console.log(this.rep,k)
  if(this.rep.hospital=='Hospital1'){
  this.http.post<any>('http://localhost:5000/o1/addreport',this.rep).subscribe(data=>{
    console.log(data);
  })
}
else if(this.rep.hospital=='Hospital2'){
  this.http.post<any>('http://localhost:5000/o2/addreport',this.rep).subscribe(data=>{
    console.log(data);
  })
}
}
}
