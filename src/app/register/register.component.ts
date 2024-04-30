import { Component, inject } from '@angular/core';

import employeeUtil from '../employeeUtil';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkIdValidator } from '../checkIdValidator';
import { nameSpaceAgain } from '../nameSpace';

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
    id:new FormControl("",[Validators.required,Validators.min(1)],checkIdValidator(this.empService)),
    name:new FormControl("",[Validators.required,nameSpaceAgain()]),
    salary:new FormControl("",[Validators.required])
    
  })



  unsavedForm():boolean{


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
function namespace(): import("@angular/forms").ValidatorFn {
  throw new Error('Function not implemented.');
}

