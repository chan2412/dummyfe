import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen = false;
active=true;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  oc(n:any){
    if(n=="sn"){
    this.active=true;
    }
    else{
      this.active=false;
    }
  }
}
