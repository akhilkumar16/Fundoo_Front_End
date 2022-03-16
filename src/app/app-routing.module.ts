import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "note", component: GetallnotesComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
