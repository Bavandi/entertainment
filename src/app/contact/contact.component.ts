import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

@Component({
  selector: 'be-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit, AfterViewInit {


  private maps_url = 'https://maps.google.com/maps/dir//Dhome+Bar+And+Restaurant+Majengo,+Off+Ganda+Road/@-3.2149992,40.1145496,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x18158fb02820fe7f:0x2bb0fc4f7a5c00fc';

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._jsPluginsInitService.initializePageTransition(),
      this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor(),
      this._jsPluginsInitService.initializeWowAnimation();
  }

  redirectToMaps() {
    const win = window.open(this.maps_url, '_blank', 'noopener,noreferrer');
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      // alert('Please allow popups for this website');
    }
  }

}
