import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsPluginsInitService } from '../core/vendor-utils/js-plugins-init.service';

declare const $: any;

@Component({
  selector: 'be-dj-party',
  templateUrl: './dj-party.component.html',
  styleUrls: ['./dj-party.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DjPartyComponent implements OnInit, AfterViewInit {

  constructor(
    private _jsPluginsInitService: JsPluginsInitService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._youtubePopup();

    this._jsPluginsInitService.initializeDataBackgroundImage(),
      this._jsPluginsInitService.initializeDataBackgroundColor();
  }

  private _youtubePopup() {
    $('.wpem-single-event-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          adaptiveHeight: true
        }
      }]
    });


    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    const url = $("#wpem-youtube-modal-popup .wpem-modal-content iframe").attr('src');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $(".wpem-modal-close").on('click', function () {
      $("#wpem-youtube-modal-popup .wpem-modal-content iframe").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#event-youtube-button").on('click', function () {
      $("#wpem-youtube-modal-popup .wpem-modal-content iframe").attr('src', url);
    });
  }
}
