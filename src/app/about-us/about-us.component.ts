import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializePageTransition(),
    this._jsPluginsInitService.initializeDataBackgroundImage(),
    this._jsPluginsInitService.initializeDataBackgroundColor(),
    this._jsPluginsInitService.initializeWowAnimation(),
    this._jsPluginsInitService.initializeCarouselClassesSlider();
  }

}
