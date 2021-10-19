import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

/* App Root */
import { AppComponent } from './app.component';

/*Routing Module */
import { AppRoutingModule } from './app-routing.module';

/*Feature Modules */
import {PrincipalModule} from './principal/principal.module';

import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: 
  [
    AppComponent,
    SplashComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
