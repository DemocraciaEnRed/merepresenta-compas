import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import {MatButtonModule} from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { DescriptionComponent } from '../description/description.component';
import { SurveyComponent } from './survey/survey.component';
import { GraphComponent } from './graph/graph.component';

import {MatToolbarModule} from '@angular/material/toolbar';

import { GoogleChartsModule } from 'angular-google-charts';
import {MatIconModule} from '@angular/material/icon';
import { NgApexchartsModule } from "ng-apexcharts";

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    IntroComponent,
    LoginComponent,
    VideoComponent,
    PreguntaComponent,
    DescriptionComponent,
    SurveyComponent,
    GraphComponent
  ],
  exports: [
    HeaderComponent,
    IntroComponent,
    LoginComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    ChartsModule,
    MatToolbarModule,
    GoogleChartsModule,
    MatIconModule,
    CdkAccordionModule,
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class PrincipalModule { }
