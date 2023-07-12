import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

declare const $: any;

@Directive({
  selector: '[beWpemModalButton]'
})
export class WpemModalButtonDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>,
  ) { }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    $("body").addClass("wpem-modal-open");
    const this$ =$( event.currentTarget);
    console.info({this$});
    const o = this$.attr("data-modal-id");
    console.info({o})
    $("#" + o).length > 0 && $("#" + o).addClass("wpem-modal-open");
  }

}
