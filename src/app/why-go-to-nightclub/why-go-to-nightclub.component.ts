import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-why-go-to-nightclub',
  templateUrl: './why-go-to-nightclub.component.html',
  styleUrls: ['./why-go-to-nightclub.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyGoToNightclubComponent implements OnInit, AfterViewInit {

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
