import { CanActivateFn } from "@angular/router";
import { UserService } from "./user.service";
import { inject } from "@angular/core";

export const AdminGuard:CanActivateFn=()=>{

    let userService=inject(UserService);

    if(userService.getName()=='abc')

    return true;

    else{
        alert("no access");
        return false;
    }
}