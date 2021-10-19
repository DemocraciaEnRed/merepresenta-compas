import { Pregunta, PreguntaUsuario } from "./pregunta";

export class Trivia {
    cuestionario: Pregunta[] = [];
    PositionX:number=0;
    PositionY:number=0;
    categoriasResultado:CategoriaResultado[]=[];
}

export class TriviaUser {
    cuestionarioUsuario: PreguntaUsuario[] = [];
}


export class CategoriaResultado {
    Title: String='';
    Description: String=''
    selected: boolean=false;
}
