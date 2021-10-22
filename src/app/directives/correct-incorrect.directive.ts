import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appCorrectIncorrect]'
})
export class CorrectIncorrectDirective {
  DELAY = 300;
  correct: boolean;
  constructor(private elem: ElementRef, private  renderer: Renderer2) {
    this.correct = true;

    this.background = {
      color: 'success',
    };
  }

  @HostListener('click')
  async onMouseClick(): Promise<void> {

    if (this.correct) {
      this.renderer.setAttribute(this.elem.nativeElement, 'color', this.isCorrect(this.background));
    } else {
      this.renderer.setAttribute(this.elem.nativeElement, 'color', this.isCorrect(this.background));
    }
  }

  isCorrect(result: boolean): string{
    return result ? 'success': 'danger';
  }
  @Input('appCorrectIncorrect') background: any;
}
