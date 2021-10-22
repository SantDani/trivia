import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';


@Directive({
  selector: '[appCorrectIncorrect]'
})
export class CorrectIncorrectDirective {
  // DELAY = 300;
  correct: boolean;
  constructor(private elem: ElementRef, private  renderer: Renderer2) {
    this.correct = true;
  }

  @HostListener('click')
  async onMouseClick(): Promise<void> {

    if (this.correct) {
      this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'green');
      // await this.delay(300);
    } else {
      this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'red');
    }


    // this.correct;
    //this.renderer.setStyle(this.elem.nativeElement, 'border', this.configV2.borderNoHover);
    // this.isHover = 'noHover';

    console.log('click');

  }

   delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
}
