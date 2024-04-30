import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { map, switchMap, timer } from "rxjs";
import { EmployeeService } from "./employee.service";

export const checkIdValidator=(empservice:EmployeeService):AsyncValidatorFn=>{

    return (control:AbstractControl)=>{

        return timer(300)
        .pipe(switchMap(()=>empservice.checkId(control.value)
    .pipe(map(e=>e.count>0?{idError:true}:null))))
    }
}