import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';
import { Router } from '@angular/router';

@Component({
  selector: 'be-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializePageTransition(),
      this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor(),
      this._jsPluginsInitService.initializeWowAnimation(),
      this._jsPluginsInitService.initializeCarouselClassesSlider(),
      this._jsPluginsInitService.initializeMainSlider(),
      this._jsPluginsInitService.initializeTabContent(),
      this._jsPluginsInitService.initializeMag();
  }

  navigateTo($myParam = ''): void {
    const navigationDetails: string[] = [];
    if ($myParam.length) {
      navigationDetails.push('/' + $myParam);
    }
    this._router.navigate(navigationDetails);
  }

}
