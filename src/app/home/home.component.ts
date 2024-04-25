import { Component, inject } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flag=false;

  router=inject(Router);

  ngOnInit(){

    this.router.events.subscribe((event:Event)=>{

      if(event instanceof NavigationStart){
        this.flag=true;
      }

      if(event instanceof NavigationEnd || event instanceof NavigationCancel){
        this.flag=false;
      }



    })


  }


}
