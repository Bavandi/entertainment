import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

declare const $: any;

@Directive({
  selector: '[beWpemTabsWrap]'
})
export class WpemTabsWrapDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef<HTMLDivElement>,
  ) { }

  @HostListener('click', ['$event'])
  handleClick(event: any) {
    $(document).delegate("ul.wpem-tabs-wrap li.wpem-tab-link", "click", this.tabChanged),
      window.addEventListener("keydown", function (o: any) {
        27 === o.key && $(".wpem-modal-close").length > 0 && $(".wpem-modal-close").trigger("click")
      });
  }

  tabChanged(o: any) {
    console.info({o})
    const this$ = $(o.currentTarget);

    this$.addClass("active").parents("ul.wpem-tabs-wrap").find("li").not(this$).removeClass("active");
    const e = this$.data("tab");
    this$.closest(".wpem-tabs-wrapper").find(".wpem-tab-content .wpem-tab-pane").not("#" + e).removeClass("active"),
      this$.closest(".wpem-tabs-wrapper").find(".wpem-tab-content .wpem-tab-pane#" + e).addClass("active")
  }

}
