import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'addclient', component: AddclientComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin'] } },
  { path: 'viewclient', component: ViewclientComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin'] } },
  { path: 'viewloan', component: ViewloanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'makeloan', component: MakeloanComponent },
  { path: 'viewapplication', component: ViewapplicationComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Client'] } },
  { path: 'checkapplication', component: CheckapplicationComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin', 'Client'] } },
  { path: 'viewcustomer', component: ViewcustomerComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin', 'Client'] } },
  { path: 'checkstatus', component: CheckstatusComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Customer'] } },
  { path: 'addloan', component: AddloanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Customer'] } },
  { path: 'newloan', component: NewloanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin'] } },
  { path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin', 'Client', 'Customer'] } },
  { path: 'viewloanadmin', component: ViewloanadminComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin'] } },
  { path: 'editloan/:loanId', component: EditloanComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin'] } },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthGuard], data: { expectedRoles: ['Admin', 'Client', 'Customer'] } },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
