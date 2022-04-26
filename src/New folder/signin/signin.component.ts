import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient,Doctor, signin, Labstaff } from './patient';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public mt:any;
public hospitals=['Hospital1','Hospital2'];
public roles=['admin','doctor','patient','labstaff'];
public Patient=new Patient('','password' ,'', '','','Select a Hospital');

public Signin=new signin('','' ,'Select a Role', 'Select a Hospital');
    constructor(private el:ElementRef,private route:Router,private http:HttpClient) { }
    
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
          if(data==true)
          {console.log(data);
            this.route.navigate(['admin/dashboard']);
          }
          else{
            alert("enter valid credintials");
          }
                  })
                }
     

          else  if(result.hospital==="Hospital2"){
            this.http.post<any>("http://localhost:3000/o2/signin",result).subscribe(data=>{
              if(data)
              {
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
if(data )
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
          if(data )
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
        if(result.hospital==="Hospital1"){
        this.http.post<any>("http://localhost:4500/o1/signin",result).subscribe(data=>{
          if(data )
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
          if(data )
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
            if(data )
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
            if(data )
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
  
    onPatR(){
      console.log(this.Patient); 
      if(this.Patient.hospital==='Hospital1'){
        this.http.post<any>("http://localhost:5000/o1/user",this.Patient).subscribe(data=>{
          console.log("helloi");
      })
    }
      else if(this.Patient.hospital==='Hospital2'){
      this.http.post<any>("http://localhost:5000/o2/user",this.Patient).subscribe(data=>{
        console.log("helloi");
      })}  
      }
}

