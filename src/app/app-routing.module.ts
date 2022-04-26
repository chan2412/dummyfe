import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { HomeComponent } from './home/home.component';
import { LabstaffdashboardComponent } from './labstaffdashboard/labstaffdashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{
  path:'',
  redirectTo:'home',
  pathMatch:'full'},
  {
    path:'home',
    component:HomeComponent,
  },{
      path:'signin',
      component:SigninComponent
  },
  {
    path:'doctor',
    children:[{
      path:'dashboard',
      component:DoctordashboardComponent
    }]
  },
  {
    path:'patient',
    children:[{
      path:'dashboard',
      component:PatientdashboardComponent
    },
    ]
  },
  {
    path:'labstaff',
    children:[{
      path:'dashboard',
      component:LabstaffdashboardComponent
    }]
  },
  {
    path:'admin',
    children:[{
      path:'dashboard',
      component:AdmindashboardComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
