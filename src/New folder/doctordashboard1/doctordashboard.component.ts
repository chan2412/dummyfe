import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent implements OnInit {
  public users:any;
  public userdata:any;
public sidebar:any;
public sidebarBtn:any;
public act: any;
  public actarr = ['dashboard', 'profile', 'doctor', 'labstaff', 'docsignup', 'labstaffsignup'];
  constructor(private el:ElementRef,private http:HttpClient,private route:Router) {
   }
  ngOnInit(): void {
    this.act=this.actarr[0];
    console.log(this.act)
    this.sidebar=this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn=this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata=localStorage.getItem('login');
    this.userdata=JSON.parse(this.userdata);
    console.log(this.userdata);
    if(this.userdata.role=='doctor'){
    if(this.userdata.hospital=='Hospital1'){
      this.http.post<any>('http://localhost:5000/o1/user',{password:'password'}).subscribe(data => {
        this.users=data;
        console.log(data);
    })
      this.http.get<any>('http://localhost:5000/o1/users').subscribe(data => {
        this.users=data;
        console.log(data);
    })
    }
    else if(this.userdata.hospital=='Hospital2'){
      this.http.get<any>('http://localhost:5000/o2/users').subscribe(data => {
      this.users=data;
      console.log(data);
  })
 
    }}
  else{
    this.route.navigate(['/signin']);
  }
  
  }
  onc(){
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
