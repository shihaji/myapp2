import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <br>
    <a routerLink="payroll" style="margin-right: 20px;">payroll</a>
    <a routerLink="leaves" style="margin-right: 20px;">leaves</a>

    
    <router-outlet></router-outlet>

  `,
  styles: [
  ]
})
export class AdminComponent {

}
