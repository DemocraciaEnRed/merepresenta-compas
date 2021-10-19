import { Component, Input, OnInit } from '@angular/core';

import { TriviaService } from '../trivia_service/trivia.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs!:boolean;

  ordenPreguntaUsuario: number;
  ordenPregunta: number;
  back:boolean=true;

  constructor(private triviaService:TriviaService, private _router: Router) {
    this.ordenPreguntaUsuario = triviaService.ordenPreguntaUsuario;
    this.ordenPregunta = triviaService.ordenPregunta;
   }

  ngOnInit(): void {
  }

  actualizarHeader(){

  }


backPage(){
  this._router.navigateByUrl('/');
}

}
