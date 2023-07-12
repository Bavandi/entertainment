import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[beWpemListingAccordion]'
})
export class WpemListingAccordionDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>
  ) { }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    console.info({event})
    this.el.nativeElement.classList.toggle('active');
    const o = this.el.nativeElement.nextElementSibling as HTMLDivElement;

    "block" === o.style.display ? o.style.display = "none" : o.style.display = "block"
  }
}
