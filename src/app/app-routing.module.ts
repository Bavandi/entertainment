import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'corporate-events',
    component: CorporateEventsComponent,
  },
  {
    path: 'branded-events',
    component: BrandedEventsComponent,
  },
  {
    path: 'commercial-events',
    component: CommercialEventsComponent,
  },
  {
    path: 'birthday-events',
    component: BirthdayEventsComponent,
  },
  {
    path: 'vip-events',
    component: VipEventsComponent,
  },

  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'whats-the-bar-like',
    component: WhatsTheBarLikeComponent,
  },
  {
    path: 'why-go-to-nightclub',
    component: WhyGoToNightclubComponent,
  },
  {
    path: 'what-does-disco-bar-mean',
    component: WhatDoesDiscoBarMeanComponent,
  },
  {
    path: 'whats-in-the-nightclub',
    component: WhatsInTheNightclubComponent,
  },
  {
    path: 'what-exactly-does-a-dj-do',
    component: WhatExactlyDoesADjDoComponent,
  },
  {
    path: 'what-age-limit-is-the-nightclub',
    component: WhatAgeLimitIsTheNightclubComponent,
  },

  {
    path: 'event/dj-party',
    component: DjPartyComponent,
  },
  {
    path: 'event/light-party',
    component: LightPartyComponent,
  },
  {
    path: 'event/foam-party',
    component: FoamPartyComponent,
  },
  {
    path: 'event/pole-dance',
    component: PoleDanceComponent,
  },
  {
    path: 'event/dance-party',
    component: DancePartyComponent,
  },
  {
    path: 'event/birthday-party',
    component: BirthdayPartyComponent
  },
  {
    path: 'event/music-concert',
    component: MusicConcertComponent,
  },
  {
    path: 'event/costume-party',
    component: CostumePartyComponent,
  },
  {
    path: 'event/fun-party',
    component: FunPartyComponent,
  },

  {
    path: 'event-organizer/lizy-doe',
    component: LizyDoeComponent,
  },
  {
    path: 'event-organizer/robert-lee',
    component: RobertLeeComponent,
  },
  {
    path: 'event-organizer/emily-duke',
    component: EmilyDukeComponent,
  },
  {
    path: 'event-organizer/adam-brown',
    component: AdamBrownComponent,
  },


  {
    path: 'event_listing_type/night-club',
    component: NightClubComponent,
  },
  {
    path: 'event_listing_type/night-life',
    component: NightLifeComponent,
  },
  {
    path: 'event_listing_type/night-dance',
    component: NightDanceComponent,
  },

  {
    path: 'event_listing_category/gede',
    component: KievComponent,
  },
  {
    path: 'event_listing_category/malimo',
    component: AmsterdamComponent,
  },
  {
    path: 'event_listing_category/maweni',
    component: LondonComponent,
  },
  {
    path: 'event_listing_category/barani',
    component: TorontoComponent,
  },
  {
    path: 'event_listing_category/shella',
    component: ParisComponent,
  },
  {
    path: 'event_listing_category/galana',
    component: IstanbulComponent,
  },
  {
    path: 'event_listing_category/changamwe',
    component: ColoradoComponent,
  },
  {
    path: 'event_listing_category/malindi-central',
    component: NewJerseyComponent,
  },

  {
    path: 'events',
    component: EventsComponent,
  },

  {
    path: 'category/night-club',
    component: CategoryNightClubComponent,
  },

  {
    path: 'all-services',
    component: AllServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
