import { CanDeactivateFn } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

export const RegisterGuard:CanDeactivateFn<RegisterComponent>=
(component:RegisterComponent)=>{

    return component.unsavedForm();
}