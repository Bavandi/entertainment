import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-whats-in-the-nightclub',
  templateUrl: './whats-in-the-nightclub.component.html',
  styleUrls: ['./whats-in-the-nightclub.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsInTheNightclubComponent implements OnInit, AfterViewInit {

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
