import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-night-life',
  templateUrl: './night-life.component.html',
  styleUrls: ['./night-life.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NightLifeComponent implements OnInit, AfterViewInit {

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
