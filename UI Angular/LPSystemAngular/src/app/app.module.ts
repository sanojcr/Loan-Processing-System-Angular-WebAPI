import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { ViewloanComponent } from './viewloan/viewloan.component';
import { LoginComponent } from './login/login.component';
import { MakeloanComponent } from './makeloan/makeloan.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { CheckapplicationComponent } from './checkapplication/checkapplication.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { CheckstatusComponent } from './checkstatus/checkstatus.component';
import { AddloanComponent } from './addloan/addloan.component';
import { NewloanComponent } from './newloan/newloan.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewloanadminComponent } from './viewloanadmin/viewloanadmin.component';
import { EditloanComponent } from './editloan/editloan.component';
import { FooterComponent } from './footer/footer.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicationPipe } from './application.pipe';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddclientComponent,
    ViewclientComponent,
    ViewloanComponent,
    LoginComponent,
    MakeloanComponent,
    ViewapplicationComponent,
    CheckapplicationComponent,
    ViewcustomerComponent,
    CheckstatusComponent,
    AddloanComponent,
    NewloanComponent,
    MyprofileComponent,
    ViewloanadminComponent,
    EditloanComponent,
    FooterComponent,
    EditprofileComponent,
    ApplicationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
