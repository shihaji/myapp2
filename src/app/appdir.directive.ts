import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDir]',
  
})
export class AppdirDirective {

  @Input()
  appDir!:{color:string,fontSize:string,backgroundColor:string};

  constructor(private el:ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.color=this.appDir.color;
    this.el.nativeElement.style.fontSize=this.appDir.fontSize;
    this.el.nativeElement.style.backgroundColor=this.appDir.backgroundColor;

  }

}
