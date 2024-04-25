import { Component, inject } from '@angular/core';

import employeeUtil from '../employeeUtil';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

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

  unsavedForm():boolean{

    console.log(`${this.id}  ${this.name}  ${this.salary}`)

    if(this.id>=0 || this.name.length>0 || this.salary>0){
      return confirm("You have unsaved data")
    }else{
      return true;
    }

  }

  register(){

    this.empService.registerEmp(new Employee(this.id,this.name,this.salary))
    .subscribe({
      next:data=>this.msg=data.status,
      error:err=>this.msg=err.error.status,
      complete:()=>console.log("over")
    })
    
  }

}
