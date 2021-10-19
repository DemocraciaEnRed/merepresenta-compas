import { OptionPregunta } from "./optionPregunta";

export class Pregunta {
    id: number = 0;
    title: String = '';
    opcionesPregunta: OptionPregunta[] = [];
    QuestionScore: number=0;
    Axis: String = '';
    BG_Color: String= '';
    Color: String='';
}

export class PreguntaUsuario{
    id: number = 0;
    title: String = '';
    options: String[] = [];
}