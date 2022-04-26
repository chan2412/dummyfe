
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
  public users: any;
  public suggestion = [] as any;
  public reqs: any;
  public rems: any;
  public res: any;
  public acct: any;
  public userdata: any;
  public sidebar: any;
  public sidebarBtn: any;
  public subscription: any;
  public report: any;
  public recordid: any;
  public record: any;
  public recordkeys: any;
  public repc: any;
  public recordvalues: any;
  public sidearr =
    [{ Name: 'dashboard', active: true },
    { Name: 'doctor', active: false },
    { Name: 'viewrecords', active: false },
    { Name: 'viewreports', active: false },
    { Name: 'doctorsuggestions', active: false },
    ];
  public actarr = ['dashboard', 'doctor', 'profile', 'viewrecords', 'viewreports', 'doctorsuggestions'];
  public act = this.actarr[0];
  public actreq = ['Doctor1', 'Doctor2', 'Doctor3', 'Doctor4', 'Doctor5', 'Doctor6']
  public sidereq = [{ Name: 'Doctor1', active: true },
  { Name: 'Doctor2', active: true },
  { Name: 'Doctor3', active: true },
  { Name: 'Doctor4', active: true },
  { Name: 'Doctor5', active: true },
  { Name: 'Doctor6', active: true }];

  constructor(private el: ElementRef, private route: Router, private ds: DataserviceService) { }

  async ngOnInit() {
    console.log(this.record);

    this.res = localStorage.getItem('Request') ? JSON.parse(localStorage.getItem('Request') || '[]') : [];
    this.act = this.actarr[0];
    const source = interval(3000);
    this.subscription = source.subscribe(() => this.opensnack());
    this.sidebar = this.el.nativeElement.querySelector(".sidebar");
    this.sidebarBtn = this.el.nativeElement.querySelector(".sidebarBtn");
    this.userdata = localStorage.getItem('login');
    this.userdata = JSON.parse(this.userdata);

    console.log(this.userdata);
    if (this.userdata && this.userdata.role == 'patient') {
      this.users = await this.ds.getDoctors(this.userdata.hospital);
      this.reqs = await this.ds.getPatient(this.userdata.hospital, { username: this.userdata.username });
      console.log(this.reqs, this.users[0].Record);
      if (this.reqs.doc) {
        for (var i = 0; i < this.reqs.doc.length; i++) {
          for (var j = 0; j < this.users.length; j++) {
            if (this.users[j].Record.username == this.reqs.doc[i].usr) {
              this.users[j].Record.active = this.reqs.doc[i].active;
              if (this.reqs.doc[i].active == 3) {
                var mx = [];
                for (var ij = 0; ij < this.users.length; ij++) {
                  console.log(this.users[j].Record.speciality)
                  if (this.users[ij].Record.speciality == this.users[j].Record.speciality) {
                    mx.push(this.users[ij].Record);
                  }
                }
                console.log(mx);
                for (var im = 0; im < mx.length; im++) {
                  this.suggestion.push(mx[im]);
                }
                for (var ix = 0; ix < this.reqs.doc.length; ix++) {
                  for (var jx = 0; jx < this.suggestion.length; jx++) {
                    if (this.suggestion[jx].username == this.reqs.doc[ix].usr) {
                      this.suggestion[jx].active = this.reqs.doc[ix].active;
                    }
                    else {
                      this.suggestion[jx]= Object.assign({ active: 0 }, this.suggestion[jx]);
                      // console.log(this.users[j].Record,this.users[j].Record.username,this.reqs.doc[i].usr,"68");
                    }
                  }
                }
              }

              //console.log(this.users[j].Record,this.reqs.doc[i].active);
            }
            else {
              this.users[j].Record = Object.assign({ active: 0 }, this.users[j].Record);
              // console.log(this.users[j].Record,this.users[j].Record.username,this.reqs.doc[i].usr,"68");
            }
          }
        }
      }
      else {
        for (var i = 0; i < this.users.length; i++) {
          this.users[i].Record = await Object.assign({ active: 0 }, this.users[i].Record);
          // console.log(this.users[i].Record);
        }
      }
      this.getre();
      console.log(this.users);
      console.log(this.suggestion);
      this.getrepo();
    }
    else {
      this.route.navigate(['/signin']);
    }
  }
  async opensnack() {
    // this.users=await this.ds.getDoctors(this.userdata.hospital);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onc() {
    this.sidebar.classList.toggle("active");
    if (this.sidebar.classList.contains("active")) {
      this.sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
      this.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

  activateClass(subModule: any) {
    for (let i = 0; i < this.sidearr.length; i++) {
      this.sidearr[i].active = false;
    }
    this.sidearr[subModule].active = !this.sidearr[subModule].active;
  }

  changeact(ff: any) {
    this.act = this.actarr[ff];
    console.log(this.act);
  }
  async getre() {
    this.record = await this.ds.getRecord(this.userdata.hospital, { id: this.userdata.username });
    // var m=await this.ds.getRecord(this.userdata.hospital,{id:'patient3'})
    //this.record.push(m[0])
    this.recordkeys = await Object.keys(this.record[0]);
    //var m=this.record[0].;
    console.log(this.record, this.recordkeys);
  }
  public request = true;
  //btnVal1 = "Request";
  public btnVal2 = "Request Sent";
  //button click function

  onkey7() {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var ff = this.recordid;


    for (var i = 0; i < this.recordid.length; i++) {
      if ((ff[i].match(specialChars))) {
        ff = ff.replace(ff[i], '')
      }
      console.log(this.recordid = ff);
      ff = this.recordid;
      this.recordid = ff;
    }
  }
  async getrepo() {
    this.report = await this.ds.getallReports(this.userdata.hospital, { username: this.userdata.username });
    if (this.report.err == "invalid") {
      alert("Invalid entry");
    }
    else {
      this.repc = [];
      console.log(this.report);
      for (var i = 0; i < this.report.length; i++) {
        var vk = Object.keys(this.report[i]);
        console.log(vk);
        var vv = Object.values(this.report[i]);
        console.log(vv);
        var ml = {
          keys: vk,
          values: vv
        }
        console.log(ml);
        this.repc.push(ml);
        console.log(this.repc)
      }
      console.log(this.repc);

    }
  }
  changeText() {
    this.request = !this.request
    this.btnVal2 = "Request Sent"
    alert("Request Sent Successfully");
  }
  //this.btnVal1.disabled=false;

  changearr(ff: any) {
    this.acct = this.actreq[ff];
    console.log(this.acct);
  }
  async activaterequest(subModule: any, val: any) {
    this.users[subModule].Record.active = val;
    alert("Request Sent Successfully");
    let Var = { from: this.userdata.username, to: this.users[subModule].Record.username, change: 0 };
    this.res.push(Var);
    console.log(Var);
    console.log(await this.ds.sendRequest(this.userdata.hospital, Var));

    const jsonData = JSON.stringify(this.res);
    localStorage.setItem('Request', jsonData);
    var x = localStorage.getItem("Request");

    console.log(x);
  }

}
