import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoareweComponent,
    WhatweofferComponent,
    GalleryComponent,
    GetintouchComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
