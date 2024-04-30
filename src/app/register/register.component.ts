import { Component, inject } from '@angular/core';

import employeeUtil from '../employeeUtil';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  id!:number;
  name:string="";
  salary!:number;

  empService=inject(EmployeeService);
  msg="";

  regForm:FormGroup=new FormGroup({
    id:new FormControl(""),
    name:new FormControl(""),
    salary:new FormControl("")
    
  })



  unsavedForm():boolean{

    console.log(`${this.id}  ${this.name}  ${this.salary}`)

    if(this.regForm.value.id>=0 || this.regForm.value.name.length>0 || this.regForm.value.salary>0){
      return confirm("You have unsaved data")
    }else{
      return true;
    }

  }

  register(){

    let emp=new Employee
    (this.regForm.value.id,this.regForm.value.name,this.regForm.value.salary)

    this.empService.registerEmp(emp)
    .subscribe({
      next:data=>this.msg=data.status,
      error:err=>this.msg=err.error.status,
      complete:()=>console.log("over")
    })
    
  }

}
