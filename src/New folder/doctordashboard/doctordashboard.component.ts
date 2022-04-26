import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Healthrec } from '../signin/patient';
import { DataserviceService } from '../dataservice.service';
import data2 from './patient.json';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {
  public users:any;
  public requests:any;
  public newArray1:any;
  public str:any;
public avin=[{
  firstname: "Maximilian",
  lastname: "Brooks",
  email: "m.brooks@randatmail.com",
  gender: "Male",
  address: "33 Chartwell Avenue, Wingerworth,S42 6SR",
  age: 46,
  disease: "fever",
  weight: 95,
  height: 156,
  phonenumber: "806-2895-25",
  emergencynumber: "(268) 432-5114",
  username: "user1",
  password: "pwd",
  hospital: "hospital1"
},{
  firstname: "Richard",
  lastname: "Murphy",
  email: "r.murphy@randatmail.com",
  gender: "Male",
  address: "20 Chestnut Avenue, Shavington,CW2 5BJ",
  age: 63,
  disease: "fever",
  weight: 81,
  height: 165,
  phonenumber: "583-6115-31",
  emergencynumber: "(803) 367-9504",
  username: "user2",
  password: "pwd",
  hospital: "Hospital1"
}];
  public useri:any;
  public fu:any;
  public re:any;
  public cardioreqs:any;
  public userdata:any;
  public accept=[];
public sidebar:any;
public sidebarBtn:any;
public act: any;
public Healthrec=new Healthrec("","","","","","","","","","","");
public apiUrl="https://jsonplaceholder.typicode.com/users/";
public cardiopatient=['pat1','pat2','pat3'];
public sidearr =
  [{ Name: 'Dashboard', active:true },
  { Name: 'Patients', active: false },
  {Name:'CardioReq',active:false},
  {Name:'PatientReq',active:false}
  ];
  public actarr = ['dashboard','Patients','profile', 'doctor','CardioReq', 'PatientReq','labstaff', 'docsignup', 'labstaffsignup'];
  public actreq=['Doctor1','Doctor2']
  public sidereq=[{Name:'Doctor1',active:0},
  {Name:'Doctor2',active:0}];
  public acct: any;
  public subscription: any;
  constructor(private el:ElementRef,private http:HttpClient,private route:Router,private ds:DataserviceService) {
   }
   public fetchData(){
    const data = this.ds.getPatients("Hospital1");
    console.log("Data: " + JSON.stringify(data)); 
  }
  async ngOnInit() {
    this.userdata=localStorage.getItem('login');
    this.useri=JSON.parse(localStorage.getItem('curruser')||'{}');
    this.userdata=JSON.parse(this.userdata);
    console.log(this.useri);
    console.log(this.userdata);
    const source = interval(3000);
    this.subscription = source.subscribe(val => this.opensnack());

    localStorage.setItem("users",JSON.stringify([]))
    var jj=JSON.parse(localStorage.getItem("users")||"[]");
    this.users=jj;
    console.log(data2);
    if( this.userdata&&this.userdata.role=='doctor'){
      }
      else{
        this.route.navigate(['/signin']);
      }
  // var jon=JSON.stringify(data);
  this.cardioreqs=await this.ds.getCardioRequests(this.userdata.hospital);
  console.log(this.cardioreqs);
    this.re = await this.ds.getPatients(this.userdata.hospital);
    console.log(this.re);
    var jam=localStorage.getItem("Request");
    console.log(jam);
    var jam1=JSON.parse(jam||"[]");
     jam1=await this.ds.getRequests(this.userdata.hospital);
    console.log(jam1);
        console.log(this.re);
        localStorage.setItem("Rec",JSON.stringify(this.re));
        var jeson=localStorage.getItem("Rec");
         this.str=JSON.parse(jeson||"[]");
        console.log(JSON.parse(jeson||"[]"));
        //get Request
       this.newArray1=jam1.filter((el:{to:string;}) =>
        {
          return el.to==this.userdata.username;
        });
        this.str=this.re;
        console.log(this.newArray1);
        var tu=[];
        for(var i=0;i<this.str.length;i++)
        {
          for(var j=0;j<this.newArray1.length;j++)
          {
          console.log(this.str[i].username,this.newArray1[j].from);

            if(this.str[i].username==this.newArray1[j].from)
            { var d={active:this.newArray1[j].active};
              this.str[i]=Object.assign(d,this.str[i]);
              tu.push(this.str[i]);
            }
          }
        }
        console.log(tu);
        console.log(this.newArray1);
        this.requests=tu;
        console.log(this.requests);  
    this.act=this.actarr[0];
    console.log(this.act)
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
   this.changeact(0);
  
  }
  async opensnack(): Promise<void> {
    this.fu=await this.ds.getRequestedPatients(this.userdata.hospital,this.userdata.username);
    this.re = await this.ds.getPatients(this.userdata.hospital);
   
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
 
  console.log(this.sidearr);
  console.log(subModule);
 console.log(this.sidearr[subModule].active);

}

  async changeact(ff: any) {
  this.act = this.actarr[ff];
  this.fu=await this.ds.getRequestedPatients(this.userdata.hospital,this.userdata.username);
  console.log(this.fu);
  console.log(this.re,this.fu,"refu");
  var k=[];
  for(var i=0;i<this.fu.length;i++)
  {
    for(var j=0;j<this.re.length;j++)
    {
     
     if(this.fu[i]==this.re[j].username)
     {
       k.push(this.re[j]);
     }
    }
  }
  console.log(k);
  this.re=k;
  this.users=this.re;
  this.str= await this.ds.getPatients(this.userdata.username);
  console.log(this.re);
  console.log(this.fu);
  console.log(this.act);
}

  changearr(ff:any,val:any){
  this.acct=this.requests[ff];
  console.log(this.acct);
  var tk={
    username:this.userdata.username,
    pat:this.acct.username
  }
  var q=this.newArray1.filter((el:{from:string})=>{
    return el.from==this.requests[ff].username
  })
  console.log(q);
  val==1?this.users.push(this.acct):console.log("rejected");
  var Var=Object.assign({change:val,chang:val+1},q[0]);
   console.log(Var);
 this.ds.sendRequest(this.userdata.hospital,Var);
  if(val==1)
  { 
    this.ds.acceptRequest(this.userdata.hospital,tk);
  alert("Successfully Accepted");
  }
  console.log(this.re);
 // console.log(this.acct);
}

  async activaterequest(subModule:any,val:any){
   this.requests[subModule].active=val;
   
 }
 onHelrec() {

  console.log(this.Healthrec);
  if (this.Healthrec.Hospital1 === 'Hospital1') {
    this.http.post<any>("http://localhost:4000/o1/user", this.Healthrec).subscribe(data => {
      console.log("helloi");
    })
  }
  else if (this.Healthrec.Hospital1 === 'Hospital2') {
    this.http.post<any>("http://localhost:4000/o2/user", this.Healthrec).subscribe(data => {
      console.log("helloi");
    })
  }
}

 onkey1(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.record_id;
 
  
   for(var i=0;i<this.Healthrec.record_id.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.record_id=ff);
ff=this.Healthrec.record_id;
this.Healthrec.record_id=ff;
}
}

onkey2(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.patient1;
 
  
   for(var i=0;i<this.Healthrec.patient1.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.patient1=ff);
ff=this.Healthrec.patient1;
this.Healthrec.patient1=ff;
}
}

onkey3(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.doctor1;
 
  
   for(var i=0;i<this.Healthrec.doctor1.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.doctor1=ff);
ff=this.Healthrec.doctor1;
this.Healthrec.doctor1=ff;
}
}

onkey4(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.previousprb;
 
  
   for(var i=0;i<this.Healthrec.previousprb.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.previousprb=ff);
ff=this.Healthrec.previousprb;
this.Healthrec.previousprb=ff;
}
}

onkey5(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.previousmediprb;
 
  
   for(var i=0;i<this.Healthrec.previousmediprb.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.previousmediprb=ff);
ff=this.Healthrec.previousmediprb;
this.Healthrec.previousmediprb=ff;
}
}

onkey6(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.labtesttaken;
 
  
   for(var i=0;i<this.Healthrec.labtesttaken.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.labtesttaken=ff);
ff=this.Healthrec.labtesttaken;
this.Healthrec.labtesttaken=ff;
}
}

onkey7(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.report_id;
 
  
   for(var i=0;i<this.Healthrec.report_id.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.report_id=ff);
ff=this.Healthrec.report_id;
this.Healthrec.report_id=ff;
}
}

onkey8(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.currentprb;
 
  
   for(var i=0;i<this.Healthrec.currentprb.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.currentprb=ff);
ff=this.Healthrec.currentprb;
this.Healthrec.currentprb=ff;
}
}

onkey9(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.plannedmedication;
 
  
   for(var i=0;i<this.Healthrec.plannedmedication.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.plannedmedication=ff);
ff=this.Healthrec.plannedmedication;
this.Healthrec.plannedmedication=ff;
}
}

onkey10(){
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  var ff=this.Healthrec.otherdetail;
 
  
   for(var i=0;i<this.Healthrec.otherdetail.length;i++){
  if((ff[i].match(specialChars)) ){
  ff=ff.replace(ff[i],'')
}
console.log(this.Healthrec.otherdetail=ff);
ff=this.Healthrec.otherdetail;
this.Healthrec.otherdetail=ff;
}
}
}
