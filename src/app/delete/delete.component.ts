import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  activatedRoute=inject(ActivatedRoute);
  router=inject(Router);
  
  empService=inject(EmployeeService);

  ngOnInit(){
    let id=this.activatedRoute.snapshot.params["id"];


   if(confirm("are u sure???")){
    this.empService.deleteEmp(id).subscribe({
      next:data=>this.router.navigateByUrl("home/displayAll")
    })

  }else{
    this.router.navigateByUrl("home/displayAll")
  }

  }

}
