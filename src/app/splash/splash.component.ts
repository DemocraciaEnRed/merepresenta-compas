import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  
  windowWidth: string =''; 
  showSplash: boolean =true;


  constructor() { }

  ngOnInit(): void {

    
    setTimeout(() => {

      this.windowWidth = '-' + window.innerWidth + 'px';

      setTimeout(() => {
        this.showSplash=!this.showSplash;
      }, 500);
      
    },3000);

  }

}
