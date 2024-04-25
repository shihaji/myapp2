import { Injectable, inject } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // reactive extension for javascript

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient=inject(HttpClient);

  flag=false;

  name="";

  setName(name:string){
    this.name=name;
  }

  getName(){
    return this.name;
  }

  setFlag(f:boolean){
    this.flag=f;
  }

  getFlag():boolean{
    return this.flag;
  }

  authenticate(user:User):Observable<{status:boolean}>{

    return this.httpClient.post<{status:boolean}>("http://localhost:5001/auth",user,{responseType:"json"});

  }


}
