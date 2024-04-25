import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  id!:number;

  empService=inject(EmployeeService);

  emp!:Employee;

  msg="";

  search(){
     this.msg="";
     this.emp=new Employee(0,"",0);
    this.empService.searchEmp(this.id).
    subscribe({
      next:data=>this.emp=data,
      error:er=>this.msg="Employee not found",
      complete:()=>console.log('over')
    })

  }


}
