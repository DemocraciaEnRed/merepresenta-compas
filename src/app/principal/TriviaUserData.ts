import { Pregunta, PreguntaUsuario } from "../models/pregunta";

export const CuestionarioUser: PreguntaUsuario[] = [
    {
    id: 1,
    title: '¿Dónde vivís?',
    options:["Buenos Aires","Capital Federal","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"],
    },
    {
        id: 2,
        title: '¿Qué edad tenés?',
        options:["0-20 GEN Z","20-40 MILLENIAL","40-60 GEN X","+60 BOOMER"],
    },
    {
        id: 3,
        title: 'Género',
        options:["FEMENINO","MASCULINO","OTRO / NO BINARIO"],
    }
]