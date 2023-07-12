import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';
import { Router } from '@angular/router';

@Component({
  selector: 'be-commercial-events',
  templateUrl: './commercial-events.component.html',
  styleUrls: ['./commercial-events.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommercialEventsComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor(),
      this._jsPluginsInitService.initializeWowAnimation();
  }

  navigateTo($myParam = ''): void {
    const navigationDetails: string[] = [];
    if ($myParam.length) {
      navigationDetails.push('/' + $myParam);
    }
    this._router.navigate(navigationDetails);
  }

}
