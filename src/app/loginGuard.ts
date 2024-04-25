import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "./user.service";
import { inject } from "@angular/core";


export const LoginGuard:CanActivateFn=()=>{

    let userService=inject(UserService);
    let router=inject(Router);

    if(userService.getFlag()){
        return true;
    }else{
        return router.createUrlTree(["/"]);
    }


}