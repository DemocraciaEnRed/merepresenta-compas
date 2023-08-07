import * as _  from "lodash";
import { Component, Inject, Type } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';




export interface DialogData {
    title: string;
    type:string,
    posY:any,
    posX:any,
    results:any,
    resultString:string,
    typeComponent:string,
    component: Type<any>
  }
  
  @Component({
    selector: 'dialog-shared',
    templateUrl: 'dialog-shared-wrapper.html',
    styleUrls: ['./dialog-styles.css','./dialog-link-styles.css','./dialog-whatsapp-styles.css','./dialog-twitter-styles.css'],
  })
  export class DialogShared {


    onNoClick(): void {
      this.dialogRef.close();
    }
    
    constructor(public dialogRef: MatDialogRef<DialogShared>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, private route: ActivatedRoute
    ) {}
  }