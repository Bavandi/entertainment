import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-what-age-limit-is-the-nightclub',
  templateUrl: './what-age-limit-is-the-nightclub.component.html',
  styleUrls: ['./what-age-limit-is-the-nightclub.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatAgeLimitIsTheNightclubComponent implements OnInit , AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor();
  }
}
