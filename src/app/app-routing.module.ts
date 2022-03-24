import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DeletenotesComponent } from './components/deletenotes/deletenotes.component';
 const routes: Routes = [
  { path:'', redirectTo:"/login", pathMatch:'full' },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  {
    path: "dashboard", component: DashboardComponent,canActivate:[AuthenticationGuard],
    children: [
      { path:'', redirectTo:"note", pathMatch:'full' },
      { path: "note", component: GetallnotesComponent},
      { path: "archive",component:ArchiveComponent},
      { path: "deletenotes",component:DeletenotesComponent},
      { path: '',component:IconsComponent},

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
