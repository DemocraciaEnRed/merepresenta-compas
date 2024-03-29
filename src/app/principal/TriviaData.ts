import { OptionPregunta } from "../models/optionPregunta";
import { Pregunta } from "../models/pregunta";
import { CategoriaResultado } from "../models/trivia";

export const OpcionesData: OptionPregunta[] = [
        {
        title: 'Muy de acuerdo',
        checked: false,
        puntaje: 3,
        },
        {
        title: 'De acuerdo',
        checked: false,
        puntaje: 2,
        },
        {
        title: 'Moderadamente de acuerdo',
        checked: false,
        puntaje: 1,
        },
        {
        title: 'Ni de acuerdo ni en desacuerdo',
        checked: false,
        puntaje: 0,
        },
        {
        title: 'Moderadamente en desacuerdo',
        checked: false,
        puntaje: -1,
        },
        {
        title: 'En desacuerdo',
        checked: false,
        puntaje: -2,
        },
        {
        title: 'Muy en desacuerdo',
        checked: false,
        puntaje: -3,
        },
    ];

export const Cuestionario: Pregunta[] = [
        {
        id: 1,
        title: 'Los políticos deben estar cerca de la gente, escuchar y entender sus necesidades para darle lo que necesita.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#F7A334",
        Color:"#000000",
        },
        {
        id: 2,
        title: 'Si tuviera que elegir, diría que lo individual es más importante que lo colectivo.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "y",
        BG_Color: "#4BD6F7",
        Color:"#000000",
        },
        {
        id: 3,
        title: 'Si tenemos un gobierno fallido, no importa el plazo constitucional: hay que sacarlo cuanto antes.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#32F991",
        Color:"#000000",
        },
        {
        id: 4,
        title: 'En política, para algo existen las reglas de juego. Nunca es aceptable que los procedimientos se dejen de lado: hay que respetar las instituciones.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "y",
        BG_Color: "#FB2D11",
        Color:"#000000",
        },
        {
        id: 5,
        title: 'Es importante educar a nuestros niños en las tradiciones y limitar la influencia de productos culturales y tradiciones extranjeras.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#EEFF26",
        Color:"#000000",
        },
        {
        id: 6,
        title: 'Actualmente las decisiones políticas se toman más de acuerdo a los intereses de unos pocos poderosos que pensando en las necesidades de la gente.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#9F47FC ",
        Color:"#000000",
        },
        {
        id: 7,
        title: 'Muchas veces, conocer el pensamiento político de alguien permite saber si es una buena o mala persona.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#FC47C9",
        Color:"#000000",
        },
        {
        id: 8,
        title: 'Si tuviera que elegir, prefiero un liderazgo político “correcto” técnicamente, aburrido pero que administre bien, antes que uno que nos conmueva con nuevos sueños.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "y",
        BG_Color: "#C4C4C4",
        Color:"#000000",
        },
        {
        id: 9,
        title: 'El primer gol de Maradona a los ingleses (“la mano de Dios”) fue legítimo.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "y",
        BG_Color: "#367FFF",
        Color:"#000000",
        },
        {
        id: 10,
        title: 'En Democracia, hay libertad de expresión y yo puedo decir lo que quiera, siempre.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "y",
        BG_Color: "#000000",
        Color:"#ffffff",
        },
        {
        id: 11,
        title: 'Si tuviera que elegir, diría que la igualdad es más importante que la libertad.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "x",
        BG_Color: "#F7A334",
        Color:"#000000",
        },
        {
        id: 12,
        title: 'Los ricos deberían pagar mucho más impuestos que los que menos tienen.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "x",
        BG_Color: "#4BD6F7",
        Color:"#000000",
        },
        {
        id: 13,
        title: 'En general, la intervención del estado en el mercado distorsiona la economía y degrada el tejido productivo',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "x",
        BG_Color: "#32F991",
        Color:"#000000",
        },
        {
        id: 14,
        title: 'El sector privado gestiona mejor que el estado',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "x",
        BG_Color: "#FB2D11",
        Color:"#000000",
        },
        {
        id: 15,
        title: 'El Estado debe asistir económicamente a quienes han perdido el trabajo o se encuentran en situación de vulnerabilidad.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "x",
        BG_Color: "#EEFF26",
        Color:"#000000",
        },
        {
        id: 16,
        title: 'Se debería cobrar un arancel a quienes estudian en la universidad pública.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "x",
        BG_Color: "#9F47FC",
        Color:"#000000",
        },
        {
        id: 17,
        title: 'La inmigración en Argentina debería estar más controlada e, idealmente, más limitada',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "x",
        BG_Color: "#FC47C9",
        Color:"#000000",
        },
        {
        id: 18,
        title: 'Aquellas actividades económicas que dañan el medio ambiente deberían ser especialmente reguladas y en algunos casos prohibidas.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "x",
        BG_Color: "#C4C4C4",
        Color:"#000000",
        },
        {
        id: 19,
        title: 'Es prioritario fomentar y proteger la industria nacional.',
        opcionesPregunta: OpcionesData,
        QuestionScore: -1,
        Axis: "x",
        BG_Color: "#367FFF",
        Color:"#000000",
        },
        {
        id: 20,
        title: 'Industrias estratégicas como la nuclear o la militar no deberían estar en manos del sector privado.',
        opcionesPregunta: OpcionesData,
        QuestionScore: 1,
        Axis: "x",
        BG_Color: "#000000",
        Color:"#ffffff",
        },
    ];

    export const categoriasResultado: CategoriaResultado[] =[{
        Title: 'Liberalismo de izquierda',
        Description: 'Los personas de este cuadrante defienden la libertad individual, pero creen en la intervención del Estado en el mercado para promover derechos sociales. Estas personas suelen verse a sí mismas haciendo equilibrio entre la libertad individual y la justicia social. Aunque son escépticas respecto de la participación del Estado en los asuntos civiles, consideran que el Estado tiene un papel legítimo en garantizar condiciones de igualdad y en la promoción de sectores vulnerables. Así, si bien remarcan la importancia de la libertad, creen ésta también se relaciona con el acceso individual a bienes material (ej, una vivienda) e inmateriales (ej. educación) que justifican criterios de redistribución de recursos de los ricos a los pobres.',
        selected: false},
        {
        Title: 'Liberalismo de derecha',
        Description: 'Las personas en este cuadrante tratan de defender la libertad como bien político primario en todos los sentidos. Estas personas suelen verse a sí mismas como partidarias acérrimas de la libertad personal y económica y son muy escépticas sobre los planes y metas colectivos, poniendo por encima la asociación voluntaria y la caridad a los mandatos estatales por la igualdad. Normalmente, le otorgan al Estado un papel marginal con respecto a las personas de los otros tres cuadrantes, creen en el orden social espontáneo que da el mercado. Es por eso que estas personas se revelan contra los impuestos, que constituyen un acto de coacción y, por ende, una violación de su libertad individual.',
        selected: false},
        {
        Title: 'Populismo de izquierda',
        Description: 'Las personas en este cuadrante tratan de promover soluciones comunales a los problemas sociales y económicos. Estas personas suelen verse a sí mismas como favorables a un formas estatales que frenen los excesos del capitalismo y el poder de las élites y, así, disminuir la desigualdad social en una economía mixta y con un estado presente. Sus soluciones son colectivas, con valores asociados a formas de democracia más directas, con el Estado interviniendo en la economía para la redistribución de bienes y servicios.',
        selected: false},
        {
        Title: 'Populismo de derecha',
        Description: 'Los personas en este cuadrante sostienen el orden social heredado y defienden la soberanía del Estado, con una visión paternalista de la política. Estas personas suelen verse a sí mismas como defensoras de lo que sus antepasados hubieran querido, con las jerarquías de toda la vida y los valores tradicionales. Aunque, normalmente, consideran que el Estado tiene un papel en los asuntos de seguridad y en la defensa de la cultura nacional, tienden a ver con más escepticismo la participación del Estado en la economía.',
        selected: false}
    ]