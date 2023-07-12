import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

declare const $: any;

@Directive({
  selector: '[beWpemModalClose]'
})
export class WpemModalCloseDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>
  ) { }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    $("body").removeClass("wpem-modal-open"),
                        $(".wpem-modal").removeClass("wpem-modal-open");
  }

}
