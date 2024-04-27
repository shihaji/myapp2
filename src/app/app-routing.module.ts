import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { LoginGuard } from './loginGuard';
import { RegisterGuard } from './registerGuard';
import { EmployeeListResolve } from './employeeListResolve';
import { AdminComponent } from './admin/admin.component';
import { PayrollComponent } from './payroll/payroll.component';
import { LeavesComponent } from './leaves/leaves.component';
import { AdminGuard } from './adminGuard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[LoginGuard],children:[
    {path:"regi",component:RegisterComponent,canDeactivate:[RegisterGuard]},
    {path:"search",component:SearchComponent},
    {path:'delete',component:DeleteComponent},
    {path:'displayAll',component:DisplayComponent,resolve:{empList:EmployeeListResolve}},
    {path:'admin',component:AdminComponent,canActivateChild:[AdminGuard],children:[
      {path:'payroll',component:PayrollComponent},
      {path:'leaves',component:LeavesComponent}
    ]}
  ]},
  {path:"delete/:id",component:DeleteComponent},
  {path:"**",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
