import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-whats-the-bar-like',
  templateUrl: './whats-the-bar-like.component.html',
  styleUrls: ['./whats-the-bar-like.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsTheBarLikeComponent implements OnInit, AfterViewInit {

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
