import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppMainHeaderComponent } from './app-main-header/app-main-header.component';
import { AppMainFooterComponent } from './app-main-footer/app-main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertMajorComponent } from './commons/alert-major/alert-major.component';
import { AlertMinorComponent } from './commons/alert-minor/alert-minor.component';
import { OverlayDirective } from './commons/directives/overlay.directive';
import { FeatureNotReadyComponent } from './commons/feature-not-ready/feature-not-ready.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    AboutComponent,
    AppMainHeaderComponent,
    AppMainFooterComponent,
    AlertMajorComponent,
    AlertMinorComponent,
    OverlayDirective,
    FeatureNotReadyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
