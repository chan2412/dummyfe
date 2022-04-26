import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { LabstaffdashboardComponent } from './labstaffdashboard/labstaffdashboard.component';
import { PatientComponent } from './patient/patient.component';
import { LabstaffComponent } from './labstaff/labstaff.component';
import { AdminComponent } from './admin/admin.component';
import { DataserviceService } from './dataservice.service';
@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HomeComponent,
    SigninComponent,
    DoctorComponent,
    DoctordashboardComponent,
    PatientdashboardComponent,
    LabstaffdashboardComponent,
    PatientComponent,
    LabstaffComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
