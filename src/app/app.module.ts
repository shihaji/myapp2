import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { PayrollComponent } from './payroll/payroll.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AppdirDirective } from './appdir.directive';
import { MydirDirective } from './mydir.directive';
import { NamevalidatorDirective } from './namevalidator.directive';
import { NameCheckDirective } from './name-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NopageComponent,
    RegisterComponent,
    DeleteComponent,
    DisplayComponent,
    SearchComponent,
    AdminComponent,
    PayrollComponent,
    LeavesComponent,
    AppdirDirective,
    MydirDirective,
    NamevalidatorDirective,
    NameCheckDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
