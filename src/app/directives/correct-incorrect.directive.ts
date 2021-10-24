import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appCorrectIncorrect]'
})
export class CorrectIncorrectDirective {

  constructor(private elem: ElementRef, private  renderer: Renderer2) {
    this.response = {
      isCorrect: false
    };
  }

  @HostListener('click')
  async onMouseClick(): Promise<void> {
    this.renderer.setAttribute(this.elem.nativeElement, 'color', this.isCorrect(this.response.isCorrect));
  }

  isCorrect(isCorrect: boolean): string{
    return isCorrect ? 'success': 'danger';
  }
  @Input('appCorrectIncorrect') response: any;
}
