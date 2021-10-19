import { Component, OnInit } from '@angular/core';
import { PreguntaUsuario } from 'src/app/models/pregunta';

import { TriviaService } from '../trivia_service/trivia.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  orden: number;
  pregunta: PreguntaUsuario;

  constructor(private triviaService:TriviaService, private _router: Router) {
    this.orden = triviaService.ordenPreguntaUsuario;
    this.pregunta=triviaService.getPreguntaUsuario(this.orden);
  }  
  
  ngOnInit(): void {
  }

  btnClick(id:number, optionChoiced:number){
    console.log(id)
    console.log(optionChoiced)
    switch(id){
      case 1:
        this.triviaService.user.province=this.triviaService.triviaUser.cuestionarioUsuario[id-1].options[optionChoiced];
        this.orden++;
        this.pregunta=this.triviaService.getPreguntaUsuario(this.orden);
        console.log(this.triviaService.user.province)
        break;
      case 2:
        this.triviaService.user.age=this.triviaService.triviaUser.cuestionarioUsuario[id-1].options[optionChoiced];
        this.orden++;
        this.pregunta=this.triviaService.getPreguntaUsuario(this.orden);
        console.log(this.triviaService.user.age)
        break;
      case 3:
        this.triviaService.user.gender=this.triviaService.triviaUser.cuestionarioUsuario[id-1].options[optionChoiced];  
        console.log(this.triviaService.user.gender)
        this._router.navigateByUrl('trivia');
        break;
        
        default:        
        this._router.navigateByUrl('trivia');
          break;
    }  
}

}
