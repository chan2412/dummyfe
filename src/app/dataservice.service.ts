import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
public patient1="http://localhost:5000/o1/users";
public patient2="http://localhost:5000/o2/users";
public doctor1="http://localhost:4000/o1/users";
public doctor2="http://localhost:4000/o2/users";
public request1="http://localhost:5000/o1/requests";
public request2="http://localhost:5000/o2/requests";
public getrecord1="http://localhost:5000/o1/getrecord";
public getreport1="http://localhost:5000/o1/getreport";
public getrecord2="http://localhost:5000/o2/getrecord";
public getreport2="http://localhost:5000/o2/getreport";
public getallreport1="http://localhost:5000/o1/getallreports";
public getallreport2="http://localhost:5000/o2/getallreports";

public sendrequest1="http://localhost:5000/o1/sendrequest";
public sendrequest2="http://localhost:5000/o2/sendrequest";
public getrequestedpatient1="http://localhost:4000/o1/getPats";
public getrequestedpatient2="http://localhost:4000/o2/getPats";
public acceptpatient1="http://localhost:4000/o1/acceptPats";
public acceptpatient2="http://localhost:4000/o2/acceptPats";
public signinpatient1="http://localhost:5000/o1/signin";
public signinpatient2="http://localhost:5000/o2/signin";
public signindoctor1="http://localhost:4000/o1/signin";
public signindoctor2="http://localhost:4000/o2/signin";
public signinlabstaff1="http://localhost:4500/o1/signin";
public signinlabstaff2="http://localhost:4500/o2/signin";
public signinadmin1="http://localhost:3000/o1/signin";
public signinadmin2="http://localhost:3000/o2/signin";
public createpatient1="http://localhost:5000/o1/user";
public createpatient2="http://localhost:5000/o2/user";
public createdoctor1="http://localhost:4000/o1/user";
public createdoctor2="http://localhost:4000/o2/user";
public getpatient1="http://localhost:5000/o1/getuser";
public getpatient2="http://localhost:5000/o2/getuser";
public getcardio1="http://localhost:5000/o1/getpriority";
public getcardio2="http://localhost:5000/o2/getpriority";

  constructor(private http: HttpClient) { }

 async getPatients(hospital: any) {
   if(hospital=="Hospital1"){
    return await this.http.get<any>(this.patient1).toPromise();
   }
   else if (hospital=="Hospital2"){
     return await this.http.get<any>(this.patient2).toPromise();
   }
  }

  async getDoctors(hospital: any) {
    if(hospital=="Hospital1"){
     return await this.http.get<any>(this.doctor1).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.get<any>(this.doctor2).toPromise();
    }
   }
  async getRequests(hospital: any) {
    if(hospital=="Hospital1"){
     return await this.http.get<any>(this.request1).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.get<any>(this.request2).toPromise();
    }
   }
   async getRequestedPatients(hospital: any,username:any) {
     username={
       username:username
     }
    if(hospital=="Hospital1"){
     var u=await this.http.post<any>(this.getrequestedpatient1,username).toPromise();
     if(u==null)
     {
       return [];
     }
     else{
       return u;
     }
    }
    else if (hospital=="Hospital2"){
      var u=await this.http.post<any>(this.getrequestedpatient2,username).toPromise();
      if(u==null)
      {
        return [];
      }
      else{
        return u;
      }
    }
   }
   async sendRequest(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.sendrequest1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.sendrequest2,obj).toPromise();
    }
   }
   async acceptRequest(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.acceptpatient1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.acceptpatient2,obj).toPromise();
    }
   }
   async signinpatient(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.signinpatient1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.signinpatient2,obj).toPromise();
    }
   }
   async signindoctor(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.signindoctor1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.signindoctor2,obj).toPromise();
    }
   }
   async signinlabstaff(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.signinlabstaff1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.signinlabstaff2,obj).toPromise();
    }
   }
   async signinadmin(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.signinadmin1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.signinadmin2,obj).toPromise();
    }
   }
   async getPatient(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.getpatient1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.getpatient2,obj).toPromise();
    }
   }

   async createPatient(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.createpatient1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.createpatient2,obj).toPromise();
    }
   }

   async createDoctor(hospital: any,obj: any) {
    if(hospital=="Hospital1"){
     return await this.http.post<any>(this.createdoctor1,obj).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.post<any>(this.createdoctor2,obj).toPromise();
    }
   }
   async getCardioRequests(hospital: any) {
    if(hospital=="Hospital1"){
     return await this.http.get<any>(this.getcardio1).toPromise();
    }
    else if (hospital=="Hospital2"){
      return await this.http.get<any>(this.getcardio2).toPromise();
    }
   }
   async getRecord(hospital: any,obj:any) {
    if(hospital=="Hospital1")
    {
     return await this.http.post<any>(this.getrecord1,obj).toPromise();
    }
    else if (hospital=="Hospital2")
    {
      return await this.http.post<any>(this.getrecord2,obj).toPromise();
    }
   }

   async getReport(hospital: any,obj:any) {
    if(hospital=="Hospital1")
    {
     return await this.http.post<any>(this.getreport1,obj).toPromise();
    }
    else if (hospital=="Hospital2")
    {
      return await this.http.post<any>(this.getreport2,obj).toPromise();
    }
   }
   async getallReports(hospital: any,obj:any) {
    if(hospital=="Hospital1")
    {
     return await this.http.post<any>(this.getallreport1,obj).toPromise();
    }
    else if (hospital=="Hospital2")
    {
      return await this.http.post<any>(this.getallreport2,obj).toPromise();
    }
   }


}
