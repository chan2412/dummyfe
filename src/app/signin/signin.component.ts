import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Patient, signin } from './patient';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public mt:any;
public hospitals=['Hospital1','Hospital2','Laboratory'];
public roles=['admin','doctor','patient','labstaff'];
public Patient=new Patient('','','','Select a gender','','','','','','','','','password','Select a Hospital');
public gender=['Male','Female'];

public Signin=new signin('','' ,'Select a Role', 'Select a Hospital');
    constructor(private el:ElementRef,private route:Router,private http:HttpClient,private ds:DataserviceService) { }
    
    ngOnInit(): void {
      this.mt=this.el.nativeElement.querySelector("div");
     }
    onClickSubmit() { 
      let result=this.Signin; 
      const jsonData = JSON.stringify(result);
   localStorage.setItem('login', jsonData);
      if(result.role=='admin'){
        if(result.hospital==="Hospital1"){
        this.http.post<any>("http://localhost:3000/o1/signin",result).subscribe(data=>{
          console.log(data,data!="false");
          if(data&&data!="false")
          {console.log(data);
            this.route.navigate(['admin/dashboard']);
          }
          else{
            alert("enter valid credintials");
          }
                  })
                }
     

          else  if(result.hospital==="Laboratory"){
            this.http.post<any>("http://localhost:3000/o3/signin",result).subscribe(data=>{
              if(data&&data!=false)
              {
                console.log(data);
                this.route.navigate(['admin/dashboard']);
              }
              else if(data==false){
                alert("enter valid credintials");
              }
                      })
                    }
              
                    else  if(result.hospital==="Hospital2"){
                      this.http.post<any>("http://localhost:3000/o2/signin",result).subscribe(data=>{
                        if(data&&data!=false)
                        {
                          console.log(data);
                          this.route.navigate(['admin/dashboard']);
                        }
                        else if(data==false){
                          alert("enter valid credintials");
                        }
                                })
                              }
                        
      }
      else if(result.role=='doctor'){
        if(result.hospital==="Hospital1"){
    
        this.http.post<any>("http://localhost:4000/o1/signin",result).subscribe(data=>{
if(data &&data!=false)
{console.log(data);
  var d=JSON.stringify(data);
  localStorage.setItem("curruser",d);
  this.route.navigate(['doctor/dashboard']);
}
else if(data==false){
  alert("enter valid credintials");
}
        })
      }

      else if(result.hospital==="Hospital2"){
        this.http.post<any>("http://localhost:4000/o2/signin",result).subscribe(data=>{
          if(data&&data!=false)
          {console.log(data);
            var d=JSON.stringify(data);
            localStorage.setItem("curruser",d);
  this.route.navigate(['doctor/dashboard']);
}
else if(data==false){
  alert("enter valid credintials");
}
        })
      }
       // this.route.navigate(['doctor/dashboard']);
      }
      else if(result.role=='labstaff'){
        console.log(result);
        if(result.hospital==="Hospital1"){
        this.http.post<any>("http://localhost:4500/o1/signin",result).subscribe(data=>{
          if(data&&data!=false)
          {console.log(data);
            var d=JSON.stringify(data);
            localStorage.setItem("curruser",d);
  this.route.navigate(['labstaff/dashboard']);
}
else{
  alert("enter valid credintials");
}
        })
      }

      else if(result.hospital==="Hospital2"){
        this.http.post<any>("http://localhost:4500/o2/signin",result).subscribe(data=>{
          if(data&&data!=false)
          {console.log(data);
            var d=JSON.stringify(data);
            localStorage.setItem("curruser",d);
  this.route.navigate(['labstaff/dashboard']);
}
else{
  alert("enter valid credintials");
}
        })
      }
      else if(result.hospital==="Laboratory"){
        this.http.post<any>("http://localhost:4500/o3/signin",result).subscribe(data=>{
          if(data&&data!=false)
          {console.log(data);
            var d=JSON.stringify(data);
            localStorage.setItem("curruser",d);
  this.route.navigate(['labstaff/dashboard']);
}
else{
  alert("enter valid credintials");
}
        })
      }


      }
      
      else if(result.role=='patient'){

        if(result.hospital==="Hospital1"){
          this.http.post<any>("http://localhost:5000/o1/signin",result).subscribe(data=>{
            if(data&&data!=false)
            {console.log(data);
              var d=JSON.stringify(data);
              localStorage.setItem("curruser",d);
    this.route.navigate(['patient/dashboard']);
  }
  else{
    alert("enter valid credintials");
  }
          })
        }
  
        else if(result.hospital==="Hospital2"){
          this.http.post<any>("http://localhost:5000/o2/signin",result).subscribe(data=>{
            if(data&&data!=false)
            {console.log(data);
              var d=JSON.stringify(data);
              localStorage.setItem("curruser",d);
    this.route.navigate(['patient/dashboard']);
  }
  else{
    alert("enter valid credintials");
  }
          })
        }
      }
        console.log(result);
    }
    onSignup(){
        this.mt.classList.add('activei');
    }
    onSignud(){
      this.mt.classList.add('active');
  }
    onSignin(){
        this.mt.classList.remove('active');
        this.mt.classList.remove('activei');
    }
  
    async onPatR(){
      console.log(this.Patient); 
      var data=await this.ds.createPatient(this.Patient.hospital,this.Patient);
    if(data.id=="User Already Exists")
    {
      alert(data.id)
    }
    else{
      alert("User SuccessFully Registered")
    }
      }
      onk(){
        alert("kk")
      }
}

