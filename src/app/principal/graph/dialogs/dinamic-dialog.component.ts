import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { DialogData } from "./dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'twitter-dialog-component',
  templateUrl: 'dialog-shared-twitter.html',
  styleUrls: ['./dialog-twitter-styles.css']

})
export class TwitterDialogComponent {
  url = 'https://compaspolitico.merepresenta.info' + window.location.pathname + `?Y=${parseFloat(this.data.posY).toFixed(2)}%26X=${parseFloat(this.data.posX).toFixed(2)}`

  category = this.data.results.categorias.find((el: any) => el.selected).Title
  scatterChartData = this.data.results.scatterChartData
  scatterChartOptions = this.data.results.scatterChartOptions
  scatterChartLabels = this.data.results.scatterChartLabels
  scatterChartType = this.data.results.scatterChartType
  chartColors = this.data.results.chartColors

  ngOnInit(): void {
    this.data.results.scatterChartOptions.aspectRatio = 2.5
  }

  twitterShared(): void {
    window.open
      (`https://twitter.com/intent/tweet?text=*soy ${this.data.resultString}*. Jugué al Compas Político y tuve este resultado.¿Queres saber cual es tu orientación? ¡Anímate a descubrirlo! \n Seguí informándote sobre las elecciones 2023 en merepresenta.info. \n Entra a https://compaspolitico.merepresenta.info/intro para ponerte a prueba.`)
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}


@Component({
  selector: 'whatsatt-dialog-component',
  templateUrl: 'dialog-shared-whatsapp.html',
  styleUrls: ['./dialog-whatsapp-styles.css']
})
export class WhatsappDialogComponent {
  url = 'https://compaspolitico.merepresenta.info' + window.location.pathname + `?Y=${parseFloat(this.data.posY).toFixed(2)}%26X=${parseFloat(this.data.posX).toFixed(2)}`

  category = this.data.results.categorias.find((el: any) => el.selected).Title
  scatterChartData = this.data.results.scatterChartData
  scatterChartOptions = this.data.results.scatterChartOptions
  scatterChartLabels = this.data.results.scatterChartLabels
  scatterChartType = this.data.results.scatterChartType
  chartColors = this.data.results.chartColors

  ngOnInit(): void {
    this.data.results.scatterChartOptions.aspectRatio = 2.5
  }

  whatsappShared(): void {
    window.open
      (`whatsapp://send?text=*soy ${this.data.resultString}*. Jugué al Compas Político y tuve este resultado.¿Queres saber cual es tu orientación? ¡Anímate a descubrirlo! \n Seguí informándote sobre las elecciones 2023 en merepresenta.info. \n Entra a https://compaspolitico.merepresenta.info/intro para ponerte a prueba.`)
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}


@Component({
  selector: 'link-dialog-component',
  templateUrl: 'dialog-shared-link.html',
  styleUrls: ['./dialog-link-styles.css']
})
export class LinkDialogComponent {
  url = window.location.origin + window.location.pathname + `?Y=${parseFloat(this.data.posY).toFixed(2)}&X=${parseFloat(this.data.posX).toFixed(2)}`
  copyUrl(): void {
    navigator.clipboard.writeText(this.url)
  }
  ngOnInit(): void {

  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}


/* @Component({
  selector: 'image-dialog-component',
  templateUrl: 'dialog-shared-image.html',
  styleUrls: ['./dialog-styles.css']
})
export class ImageDialogComponent {
  category = this.data.results.categorias.find((el: any) => el.selected).Title
  categoryDescription = this.data.results.categorias.find((el: any) => el.selected).Description

  scatterChartData = this.data.results.scatterChartData
  scatterChartOptions = this.data.results.scatterChartOptions
  scatterChartLabels = this.data.results.scatterChartLabels
  scatterChartType = this.data.results.scatterChartType
  chartColors = this.data.results.chartColors


  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('screen') screen_wrapper!: ElementRef;


  ngOnInit(): void {
    
    this.data.results.scatterChartOptions.aspectRatio = 3
  }

  imageShared(): void {
    
    const htmlWrapper = this.screen_wrapper.nativeElement
    htmlWrapper.style.position= 'absolute'
    htmlWrapper.style.height = '100vh'
    const htmlToCanva = this.screen.nativeElement
    
    htmlToCanva.style.width= '1024px'
    htmlToCanva.style.height= 'fit-content'
    htmlToCanva.querySelector('#graphImage').style.height = '95%'
    htmlToCanva.querySelector('#graphImage').style.display = 'flex'
    htmlToCanva.querySelector('#graphImage').style.flexDirection = 'column'
    htmlToCanva.querySelector('.compasImage').style.height = '60%'
    htmlToCanva.querySelector('.description').style.flex = '1'
    htmlToCanva.querySelector('.description').style.height = 'fit-content'


    html2canvas(htmlToCanva,{scale:1}).then(canvas => {
     
    });
    setTimeout(() => {
      html2canvas(htmlToCanva,{scale:1}).then(canvas => {
        canvas.style.position='fixed'
        canvas.style.zIndex='9999999'
  
  
        const imageBase64 = canvas.toDataURL();
  
        // Abrir una nueva ventana con la imagen
        const newWindow = window.open(imageBase64);
        if (newWindow) {
          // Crear una página HTML en blanco y agregar la imagen base64 como una etiqueta <img>
          newWindow.document.write(`<html><body><img src="${imageBase64}" alt="Captura de pantalla"></body></html>`);
          newWindow.document.close();
        } else {
          console.error("No se pudo abrir una nueva ventana.");
        }
        //document.body.appendChild(canvas)
  
        
        let link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvas.toDataURL()
        link.click();
      });
      
    }, 2000);

  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
} */

