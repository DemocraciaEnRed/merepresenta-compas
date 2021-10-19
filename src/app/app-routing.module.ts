import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { GraphComponent } from './principal/graph/graph.component';
import { IntroComponent } from './principal/intro/intro.component';
import { PreguntaComponent } from './principal/pregunta/pregunta.component';
import { PrincipalModule } from './principal/principal.module';
import { SurveyComponent } from './principal/survey/survey.component';

export const routes: Routes = [
  
  {path: 'intro', component: IntroComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'info', component: SurveyComponent},
  {path: 'trivia', component: PreguntaComponent},
  {path: 'chart', component: GraphComponent},
  /*{path: 'fin', component: PreguntaComponent},*/
  { path: '', redirectTo: '/intro', pathMatch: 'full'},
  /*{ path: '**', redirectTo: '/intro/1', pathMatch: 'full'},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PrincipalModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}