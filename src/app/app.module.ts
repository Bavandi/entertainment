import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CorporateEventsComponent } from './corporate-events/corporate-events.component';
import { BrandedEventsComponent } from './branded-events/branded-events.component';
import { CommercialEventsComponent } from './commercial-events/commercial-events.component';
import { BirthdayEventsComponent } from './birthday-events/birthday-events.component';
import { VipEventsComponent } from './vip-events/vip-events.component';
import { BlogComponent } from './blog/blog.component';
import { WhatsTheBarLikeComponent } from './whats-the-bar-like/whats-the-bar-like.component';
import { WhyGoToNightclubComponent } from './why-go-to-nightclub/why-go-to-nightclub.component';
import { WhatDoesDiscoBarMeanComponent } from './what-does-disco-bar-mean/what-does-disco-bar-mean.component';
import { WhatsInTheNightclubComponent } from './whats-in-the-nightclub/whats-in-the-nightclub.component';
import { WhatExactlyDoesADjDoComponent } from './what-exactly-does-a-dj-do/what-exactly-does-a-dj-do.component';
import { WhatAgeLimitIsTheNightclubComponent } from './what-age-limit-is-the-nightclub/what-age-limit-is-the-nightclub.component';
import { DjPartyComponent } from './dj-party/dj-party.component';
import { LightPartyComponent } from './light-party/light-party.component';
import { FoamPartyComponent } from './foam-party/foam-party.component';
import { PoleDanceComponent } from './pole-dance/pole-dance.component';
import { DancePartyComponent } from './dance-party/dance-party.component';
import { BirthdayPartyComponent } from './birthday-party/birthday-party.component';
import { MusicConcertComponent } from './music-concert/music-concert.component';
import { CostumePartyComponent } from './costume-party/costume-party.component';
import { FunPartyComponent } from './fun-party/fun-party.component';
import { LizyDoeComponent } from './lizy-doe/lizy-doe.component';
import { RobertLeeComponent } from './robert-lee/robert-lee.component';
import { EmilyDukeComponent } from './emily-duke/emily-duke.component';
import { AdamBrownComponent } from './adam-brown/adam-brown.component';
import { NightClubComponent } from './night-club/night-club.component';
import { NightLifeComponent } from './night-life/night-life.component';
import { NightDanceComponent } from './night-dance/night-dance.component';
import { KievComponent } from './kiev/kiev.component';
import { AmsterdamComponent } from './amsterdam/amsterdam.component';
import { LondonComponent } from './london/london.component';
import { TorontoComponent } from './toronto/toronto.component';
import { ParisComponent } from './paris/paris.component';
import { IstanbulComponent } from './istanbul/istanbul.component';
import { ColoradoComponent } from './colorado/colorado.component';
import { NewJerseyComponent } from './new-jersey/new-jersey.component';
import { EventsComponent } from './events/events.component';
import { CategoryNightClubComponent } from './category-night-club/category-night-club.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { LoadImageDirective } from './load-image.directive';
import { WpemListingAccordionDirective } from './wpem-listing-accordion.directive';
import { WpemModalCloseDirective } from './wpem-modal-close.directive';
import { WpemModalOverlayDirective } from './wpem-modal-overlay.directive';
import { WpemModalButtonDirective } from './wpem-modal-button.directive';
import { WpemTabsWrapDirective } from './wpem-tabs-wrap.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    GalleryComponent,
    CorporateEventsComponent,
    BrandedEventsComponent,
    CommercialEventsComponent,
    BirthdayEventsComponent,
    VipEventsComponent,
    BlogComponent,
    WhatsTheBarLikeComponent,
    WhyGoToNightclubComponent,
    WhatDoesDiscoBarMeanComponent,
    WhatsInTheNightclubComponent,
    WhatExactlyDoesADjDoComponent,
    WhatAgeLimitIsTheNightclubComponent,
    DjPartyComponent,
    LightPartyComponent,
    FoamPartyComponent,
    PoleDanceComponent,
    DancePartyComponent,
    BirthdayPartyComponent,
    MusicConcertComponent,
    CostumePartyComponent,
    FunPartyComponent,
    LizyDoeComponent,
    RobertLeeComponent,
    EmilyDukeComponent,
    AdamBrownComponent,
    NightClubComponent,
    NightLifeComponent,
    NightDanceComponent,
    KievComponent,
    AmsterdamComponent,
    LondonComponent,
    TorontoComponent,
    ParisComponent,
    IstanbulComponent,
    ColoradoComponent,
    NewJerseyComponent,
    EventsComponent,
    CategoryNightClubComponent,
    AllServicesComponent,
    LoadImageDirective,
    WpemListingAccordionDirective,
    WpemModalCloseDirective,
    WpemModalOverlayDirective,
    WpemModalButtonDirective,
    WpemTabsWrapDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
