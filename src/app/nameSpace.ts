import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";


export function nameSpaceAgain(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    
        let name=control.value;

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