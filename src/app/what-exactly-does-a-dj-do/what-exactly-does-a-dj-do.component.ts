import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-what-exactly-does-a-dj-do',
  templateUrl: './what-exactly-does-a-dj-do.component.html',
  styleUrls: ['./what-exactly-does-a-dj-do.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatExactlyDoesADjDoComponent implements OnInit, AfterViewInit {

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
