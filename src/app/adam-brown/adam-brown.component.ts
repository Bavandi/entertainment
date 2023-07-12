import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-adam-brown',
  templateUrl: './adam-brown.component.html',
  styleUrls: ['./adam-brown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdamBrownComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor(),
      this._jsPluginsInitService.initializeTabContent();
  }
}
