import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[helo]'
})
export class MydirDirective {

  @Input()
  helo:string="";

  constructor(private el:ElementRef) { }


  ngOnInit(){
    this.el.nativeElement.style.color=this.helo;
  }

}
