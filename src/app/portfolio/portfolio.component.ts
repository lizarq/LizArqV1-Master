import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Portfolio = {
    item:[
      {
      imgsrc:"assets/images/portfolio/p1.jpg",
      imgalt:'portfolio image',
      ref:'#',
      title:'Renders' ,
      route:'Renders'   
      } , 
      {
      imgsrc:'assets/images/portfolio/Autocad.jpg',
      imgalt:"portfolio image",
      ref:"#",
      title:"Autocad",
      route:'Autocad'
      } , 
     ],
     item2:
      [
       {
        imgsrc:'assets/images/portfolio/p4.jpg',
        imgalt:'portfolio image',
        ref:"#",
        title:"refactions",
        route:'Reformas'
       } , 
       {
        imgsrc:"assets/images/portfolio/Revit.jpg",
        imgalt:"portfolio image",
        ref:"#",
        title:"Revit",
        route:'Revit'

       }    
      ]

     
  };

}
