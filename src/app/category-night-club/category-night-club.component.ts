import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-category-night-club',
  templateUrl: './category-night-club.component.html',
  styleUrls: ['./category-night-club.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryNightClubComponent implements OnInit, AfterViewInit {

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
