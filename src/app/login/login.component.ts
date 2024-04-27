import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name:string="";
  password:string="";

  router=inject(Router);

  userService=inject(UserService);

  msg="";
  flag=false;

  login1(fm:NgForm){

    let user=new User(fm.form.value.name,fm.form.value.password);
     
    console.log(fm);

  }

  login(){

   this.userService.authenticate(new User(this.name,this.password))
  .subscribe({
    next:data=>{
      this.userService.setFlag(true);
      this.userService.setName(this.name);
      this.router.navigateByUrl("home")
    },
    error:er=>this.msg=er,
    complete:()=>console.log("completed")
   })

  }

}
