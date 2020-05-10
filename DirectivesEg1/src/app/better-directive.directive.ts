import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

 
  @HostListener('mouseleave') onMouseLeave() {
    //Either uncomment the below lines and use renderer or host bind both behave in same way

    //this.renderer.setStyle(this.elementRef.nativeElement,
      //'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') onMouseOver() {
    //this.renderer.setStyle(this.elementRef.nativeElement,
      //'background-color', 'blue');
      this.backgroundColor = this.highlightColor;
  }


}
