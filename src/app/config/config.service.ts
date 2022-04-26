import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
   }
   getUsers(){
     var n;
    this.http.get<any>('http://localhost:4000/o1/users').subscribe(data=>{
      n=data;
      console.log(data);
    });
    console.log(n);
    return n;
  
   }
}