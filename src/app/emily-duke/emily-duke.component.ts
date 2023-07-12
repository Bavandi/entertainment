import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-emily-duke',
  templateUrl: './emily-duke.component.html',
  styleUrls: ['./emily-duke.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmilyDukeComponent implements OnInit, AfterViewInit {

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
