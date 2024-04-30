import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employee } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //constructor(private httpClient:HttpClient) { }

  httpClient=inject(HttpClient);

  registerEmp(employee:Employee):Observable<{status:string}>{

    return this.httpClient.post<{status:string}>("http://localhost:5001/regEmp"
    ,employee,{responseType:"json"});
    
  }

  searchEmp(id:number):Observable<Employee>{

    return this.httpClient.get<Employee>(`http://localhost:5001/searchEmp/${id}`,
    {responseType:"json"})
  }

  

  deleteEmp(id:number):Observable<{status:string}>{

   return this.httpClient.delete<{status:string}>
   ("http://localhost:5001/deleteEmp/"+id,{responseType:"json"});
  }


  listAllEmp():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>("http://localhost:5001/getAllEmp",
    {responseType:"json"})

  }

  checkId(id:number):Observable<{count:number}>{

    return this.httpClient.get<{count:number}>(`http://localhost:5001/checkId/${id}`,{responseType:'json'});
  }


}
