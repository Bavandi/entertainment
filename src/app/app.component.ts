import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { JsPluginsInitService } from './core/vendor-utils/js-plugins-init.service';
import { Subscription } from 'rxjs';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'be-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private _routerEventSubscription?: Subscription;







  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _jsPluginsInitService: JsPluginsInitService,
    private _router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {


  }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this._setupRouterEventSubscription();


  }

  ngOnDestroy(): void {
    this._destroyRouterEventSubscription();
  }

  private _manuallyTriggerChangeDetection() {
    this._changeDetectorRef.detectChanges();
  }

  private _preloader(state: 'on' | 'off') {
    // console.info({ state });
    // console.info("this.updateLoading b4");
    // console.info(this.isLoading)
    const LOADER_CLASS = 'page-loaded';

    if (state === 'on') {
      this._renderer2.removeClass(this._document.body, LOADER_CLASS);
    }
    else {
      this._renderer2.addClass(this._document.body, LOADER_CLASS);
    }

    // console.info("this.updateLoading afta");
    // console.info(this.isLoading)


  }

  private _setupRouterEventSubscription() {
    this._routerEventSubscription = this._router.events
      .subscribe(event => {
        switch (true) {
          case event instanceof NavigationStart: {
            // setTimeout(() => {
            //   this._jsPluginsInitService.initializeShowPreloader();
            // }, 500);
            this._preloader('on');

            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            // setTimeout(() => {
            //   this._jsPluginsInitService.initializePreloader();
            // }, 500);
            this._preloader('off');

            // console.info("this.isLoading");
            // console.info(this.isLoading);

            this._jsPluginsInitService.manuallyScroll();


            break;
          }
          default: {
            break;
          }
        }
      })
  }

  private _destroyRouterEventSubscription() {
    if (this._routerEventSubscription instanceof Subscription) {
      this._routerEventSubscription.unsubscribe();
    }
  }
}
