import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe';
  public users={};/** 
constructor(private serv:ConfigService){
  console.log("hello");
}
ngOnInit(){
  this.serv.getUsers().subscribe(data=> {this.users = data;
    console.log(data);});
    console.log(this.users);
}*/
}
