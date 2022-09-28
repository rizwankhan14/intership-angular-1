import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RfsComponent } from './rfs/rfs.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule } from '@angular/forms';
import { BeveragesComponent } from './beverages/beverages.component';
import { EmployeeBarComponent } from './employee-bar/employee-bar.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { AngularNavbarComponent } from './angular-navbar/angular-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
//import {MatButtonModule} from '@angular/material' ;

@NgModule({
  declarations: [
    AppComponent,
    RfsComponent,
    TdfComponent,
    BeveragesComponent,
    EmployeeBarComponent,
    DemoComponent,
    LoginComponent,
    AngularNavbarComponent,
    DummycomponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
