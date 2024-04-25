import { Component, inject } from '@angular/core';
import { Employee } from '../model/employee';
import employeeUtil from '../employeeUtil';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {


  emp$!:Employee[];

  empServ=inject(EmployeeService)

  activatedRoute=inject(ActivatedRoute);

  ngOnInit(){

    // this.emp$=this.empServ.listAllEmp();

    this.emp$=this.activatedRoute.snapshot.data["empList"];

  }

}
