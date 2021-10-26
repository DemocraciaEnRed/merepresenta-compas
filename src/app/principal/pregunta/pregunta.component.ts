import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GraphComponent } from '../graph/graph.component';

import { TriviaService } from '../trivia_service/trivia.service';
import { OptionPregunta } from "./../../models/optionPregunta";
import { Pregunta } from "./../../models/pregunta";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  pregunta: Pregunta;
  orden: number;
  posX:number;
  posY:number;

  

  constructor(private triviaService:TriviaService,private _router: Router) {
    this.orden = triviaService.ordenPregunta;
    this.pregunta=triviaService.getPregunta(this.orden);
    this.posX=triviaService.trivia.PositionX
    this.posY=triviaService.trivia.PositionY
  }

  ngOnInit(): void {
    this.triviaService.trivia.PositionX=0;
    this.triviaService.trivia.PositionY=0;
    this.posX=this.triviaService.trivia.PositionX;
    this.posY=this.triviaService.trivia.PositionY;
    console.log(this.posX)
    console.log(this.posY)
  }

  btnClick(optionChoiced:number){
    this.triviaService.setScore(this.orden,optionChoiced);
    this.posX=this.triviaService.trivia.PositionX;
    this.posY=this.triviaService.trivia.PositionY;
    this.orden++;

    if (this.orden < 20)
      this.pregunta=this.triviaService.getPregunta(this.orden);
    else
      this._router.navigateByUrl('chart');
  }
}
