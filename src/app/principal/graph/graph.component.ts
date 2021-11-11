import * as _  from "lodash";
import { Component, Input, OnInit, Inject, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TriviaService } from '../trivia_service/trivia.service';
import { AppComponent } from '../../app.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClient } from '@angular/common/http';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ChartComponent,
  ApexTooltip,
  ApexResponsive
} from "ng-apexcharts";

export type ApexChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  colors: any;
  tooltip: ApexTooltip;
  responsive: [ApexResponsive];
};

interface RoundResult {
  localidad: String,
  edad: String,
  genero: String,
  respuestas: String,
  posicion_x: number,
  posicion_y: number
}

interface RoundResultList {
  data: [ RoundResult ]
}

const defaultHeatmapValue = 0.2;

import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { CategoriaResultado } from 'src/app/models/trivia';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit { 
  posX:number=0;
  posY:number=0;
  
  titulo_resultado:String ='HOLA';
  descripcion_resultado:String ='Holaaa';
  categorias: CategoriaResultado[]=[];
  heatmapResults: number[][] = new Array(4)
    .fill(defaultHeatmapValue)
    .map(() => new Array(4).fill(defaultHeatmapValue));

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  chartOptions!: ApexChartOptions;

  ngOnInit(): void {
    this.posX= this.triviaService.trivia.PositionX / 30 * 100;
    this.posY= this.triviaService.trivia.PositionY / 30 * 100;
    console.log(this.posX,this.posY);

    this.categorias=this.triviaService.categorias;
    this.categorias[3].selected=false;
    this.categorias[2].selected=false;
    this.categorias[1].selected=false;
    this.categorias[0].selected=false;

    this.scatterChartData=[
      {
        data: [
          {x: this.posX as number,y: this.posY as number},        
        ],
        label: '',
        pointRadius: 10,
      },
    ];
    
    if(this.posX>0){
      if(this.posY>0){
        //this.titulo_resultado="POPULISMOS DE DERECHA";
        this.categorias[3].selected=true;
        this.categorias[2].selected=false;
        this.categorias[1].selected=false;
        this.categorias[0].selected=false;
      }
      else{
        //this.titulo_resultado="LIBERALISMOS DE DERECHA";
        this.categorias[1].selected=true;
        this.categorias[2].selected=false;
        this.categorias[3].selected=false;
        this.categorias[0].selected=false;
      }   
    }
    else{
      if(this.posY>0){
        //this.titulo_resultado="POPULISMOS DE IZQUIERDA";
        this.categorias[2].selected=true;
        this.categorias[1].selected=false;
        this.categorias[3].selected=false;
        this.categorias[0].selected=false;
      }
      else{
        //this.titulo_resultado="LIBERALISMOS DE IZQUIERDA";
        this.categorias[0].selected=true;
        this.categorias[2].selected=false;
        this.categorias[3].selected=false;
        this.categorias[1].selected=false;
      }
    }
    if(this.posX==0 && this.posY==0){
      this.titulo_resultado="CENTRO";
        this.descripcion_resultado="WOW... estás en el centro!";
        this.categorias[0].selected=false;
        this.categorias[2].selected=false;
        this.categorias[3].selected=false;
        this.categorias[1].selected=false;
    }

    this.chartOptions = {
      series: [],
      chart: {
        height: 450,
        width: 450,
        type: "heatmap",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#575656"],
      title: {
        text: "Mapa de calor de respuestas",
        
        align: "center"
      },
      subtitle: {
        text: "¡Mirá dónde se encuadra el resto!",
        align: "center"
      },
      tooltip: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {  
              height: 400,
              width: 400
            }
          }
        }
      ]
    };

    const { user: { age, gender, province }, respuestas } = this.triviaService;
    const roundResult = {
      localidad: province,
      edad: age,
      genero: gender,
      respuestas: respuestas.join(","),
      posicion_x: this.posX,
      posicion_y: this.posY
    };

    if (respuestas.length > 0)
      this.http.post<RoundResult>('https://content.merepresenta.info/items/respuestasvf', roundResult, { headers: { "Authorization": "Bearer iKETGevoDyRC6o8sVK3sWp8Tr8pKn5TW" } })
      .subscribe()

    const axisLength = 200;
    const divisions = 4;
    const increment = axisLength / divisions;
    let matrixBounds: any = [];

    for (let i = 0; i < divisions ; i++) {
      for (let j = 0; j < divisions ; j++) {
        matrixBounds.push({
          bounds: {
            minX: increment * (j - 2),
            maxX: increment * (j - 1),
            minY: increment * (1 - i),
            maxY: increment * (2 - i)
          },
          spot: {
            horizontal: i,
            vertical: j
          }
        });
      }
    }

    this.http.get<RoundResultList>('https://content.merepresenta.info/items/respuestasvf').subscribe(({ data = [] }) => {
      data.forEach(({ posicion_x, posicion_y }) => {
        const { spot: { horizontal, vertical } } = _.find(matrixBounds, ({ bounds: { minX, maxX, minY, maxY } }) => posicion_x >= minX && posicion_x <= maxX && posicion_y >= minY && posicion_y <= maxY) || { spot: { horizontal: 0, vertical: 0} };
        const line = this.heatmapResults[horizontal];
        line[vertical]++;
      })
      
      console.log({ heatmapResults: this.heatmapResults })

      if (!_.isEmpty(data))
        this.chartOptions = {
          series: _(this.heatmapResults).map((horizontalResults, horizontal) => ({
              name: horizontal == 0? "POPULISTA" : horizontal == 3? "LIBERAL" : " ",
              data: _.map(horizontalResults, (value, vertical) => ({
                x: vertical == 0? "IZQUIERDA" : vertical == 3? "DERECHA": " ",
                y: value
              }))
            })
          )
          .reverse()
          .value(),
          ..._.omit(this.chartOptions, "series")
        };
      })
  }

  ngOnDestroy() {
    this.triviaService.respuestas = [];
  }

   scatterChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: this.parent.deviceXs? 0.7 : 2.5,
    showLines:false,
    spanGaps:false,
    layout: {
      padding: {
        top: 10,
        bottom: 15,
        left: -10
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
            display:true,
            lineWidth: 0,
            zeroLineWidth:3,
            zeroLineColor:"grey",
        },
        display: true,
        ticks: {
          max : 109,
          min: -109,
          display: false
        }
    }],
      yAxes: [{
          gridLines: {
              display:true,
              lineWidth: 0,
              zeroLineWidth:3,
              zeroLineColor:"grey",
          },
          scaleLabel:{
            display:true,
            lineHeight:0,
          },
          display: true,
          ticks: {
            max : 109,
            min: -109,
            display: false
          }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
         title: function(t, d) {
            return "";
         },
         label: (t, d) => {
           if (this.posX == 0 && this.posY == 0) return "WOW... estás en el centro!";
          const horizontalLabel = this.posX > 0? "derecha" : "izquierda";
          const verticalLabel = this.posY > 0? "populista" : "liberal";
          const _toNumber = (label: string | number | undefined) => {
            const string = label?.toString();
            const percentage = parseFloat(string ?? "0");
            const absoluted = Math.abs(percentage);
            return Math.ceil(absoluted);
          }

          const xNumber = _toNumber(t.xLabel);
          const yNumber = _toNumber(t.yLabel);
          const horizontalResult = xNumber + "% de " + horizontalLabel;
          const verticalResult = yNumber + "% " + verticalLabel;
          return [horizontalResult, verticalResult];
         }
      },
      displayColors: false
   }
  };

   scatterChartLabels: Label[] = [''];

   scatterChartType: ChartType = 'scatter';

   scatterChartData: ChartDataSets[] = [
    {
      data: [
        {x: this.posX as number,y: this.posY as number},        
      ],
      label: '',
      pointRadius: 10
    },
  ];

  public chartColors:Array<any> =[
    {
      fillColor:"#ffffff",
      strokeColor:"#ffffff",
      pointColor:"#ffffff",
      pointStrokeColor:"#ffffff",
      pointHighlightFill:"#ffffff",
      pointHighlightStroke:"#ffffff",
      pointBackgroundColor:"black",
      backgroundColor: "#ffffff"
    }]

  constructor(private triviaService:TriviaService,private _router: Router, @Inject(AppComponent) private parent: AppComponent, private http: HttpClient) { 
    //this.posX=triviaService.trivia.PositionX;
    //this.posY=triviaService.trivia.PositionY; 
    //(this.scatterChartData[0].data as number[]).push(this.posX,this.posY);
  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
