import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appWarpTextQuestion]'
})
export class WarpTextQuestionDirective {

  constructor(private  elem: ElementRef, private rerender: Renderer2) {

    this.answer = {
      text: ''
    };
  }
  @HostListener('change') // or load
  warpText(): void{
    // this.rerender.addClass()
  }

  @Input('appWarpTextQuestion') answer: any;

}
