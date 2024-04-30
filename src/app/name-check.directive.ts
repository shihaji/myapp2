import { Directive, inject } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { map, switchMap, timer } from 'rxjs';
import { UserService } from './user.service';

@Directive({
  selector: '[nameCheck]',
  providers:[
    {
      provide:NG_ASYNC_VALIDATORS,
      useClass:NameCheckDirective,
      multi:true
    }
  ]
})
export class NameCheckDirective implements Validator {

  constructor() { }
  userService=inject(UserService);
 
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
   return  timer(300)
    .pipe(switchMap(()=>this.userService.checkUserName(control.value)
  .pipe(map(e=>e.count>0?{nameError:true}:null))))

  
  }
 

}
