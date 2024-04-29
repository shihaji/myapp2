import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNamevalidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useClass:NamevalidatorDirective,
      multi:true
    }
  ]
})
export class NamevalidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let name:string=control.value;

    if(name==undefined){
      return null;
    }

    if(name.indexOf(" ")==-1)

    return null;

    else{
      return {spaceError:true}
    }
  }
  



}
