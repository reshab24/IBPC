import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChamberRegistrationComponent } from './components/chamber-registration/chamber-registration.component';
import { HomeComponent } from './components/home/home.component';
import { AffiliatedBodiesComponent } from './components/affiliated-bodies/affiliated-bodies.component';
import { MembershipComponent } from './components/membership/membership.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FatFooterComponent } from './components/fat-footer/fat-footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GoverningCouncilComponent } from './components/governing-council/governing-council.component';
import { IndividualFormComponent } from './components/individual-form/individual-form.component';
import { CorporateFormComponent } from './components/corporate-form/corporate-form.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { NgxGalleryModule } from 'ngx-gallery';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChamberRegistrationComponent,
    HomeComponent,
    AffiliatedBodiesComponent,
    MembershipComponent,
    EventsComponent,
    GalleryComponent,
    NewsComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FatFooterComponent,
    AboutUsComponent,
    GoverningCouncilComponent,
    IndividualFormComponent,
    CorporateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
