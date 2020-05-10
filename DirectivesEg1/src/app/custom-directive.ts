import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[customDirectiveHighLighter]'
})

export class CustomDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {        
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
