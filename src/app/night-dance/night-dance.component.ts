import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-night-dance',
  templateUrl: './night-dance.component.html',
  styleUrls: ['./night-dance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightDanceComponent implements OnInit, AfterViewInit {

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
