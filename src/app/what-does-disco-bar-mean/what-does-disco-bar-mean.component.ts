import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-what-does-disco-bar-mean',
  templateUrl: './what-does-disco-bar-mean.component.html',
  styleUrls: ['./what-does-disco-bar-mean.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatDoesDiscoBarMeanComponent implements OnInit, AfterViewInit {

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
