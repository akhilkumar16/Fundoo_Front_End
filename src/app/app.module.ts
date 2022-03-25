import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconsComponent } from './components/icons/icons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthguardserviceService } from './services/authguardservice/authguardservice.service';
import { UpdateComponent } from './components/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { DeletenotesComponent } from './components/deletenotes/deletenotes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SearchPipe } from './pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    GetallnotesComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdateComponent,
    DeletenotesComponent,
    ArchiveComponent,
    SearchPipe
  ],
  entryComponents:[UpdateComponent],
  imports: [
    BrowserModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,MatToolbarModule,MatExpansionModule
  ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
