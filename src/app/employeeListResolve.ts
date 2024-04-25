import { ResolveFn } from "@angular/router";
import { Employee } from "./model/employee";
import { inject } from "@angular/core";
import { EmployeeService } from "./employee.service";

export const EmployeeListResolve:ResolveFn<Employee[]>=()=>{

    let empService=inject(EmployeeService);

    return empService.listAllEmp();

}