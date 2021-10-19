import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia_service/trivia.service';
import { Pregunta } from 'src/app/models/pregunta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(triviaService: TriviaService) { 
    
  }

  ngOnInit(): void {
  }

}
