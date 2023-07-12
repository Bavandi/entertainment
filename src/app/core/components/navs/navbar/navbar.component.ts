import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsPluginsInitService } from 'src/app/core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializeLogoHover(),
      this._jsPluginsInitService.initializeHamburgerMenu(),
      this._jsPluginsInitService.initializeSticky();
  }

  navigateTo($myParam = ''): void {
    const navigationDetails: string[] = [];
    if ($myParam.length) {
      navigationDetails.push('/' + $myParam);
    }
    this._router.navigate(navigationDetails);
  }

}
