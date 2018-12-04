import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reformas',
  templateUrl: './reformas.component.html',
  styleUrls: ['./reformas.component.css']
})
export class ReformasComponent implements OnInit {

  constructor() { }
  reformas = {
    images:[
      "gallery-image-1.jpg",
      "gallery-image-2.jpg",
      "gallery-image-3.jpg"
      

    ],
    images1:[
     
      "gallery-image-4.jpg",
      "gallery-image-5.jpg",
      "gallery-image-6.jpg"

    ]
  };
  ngOnInit() {
  }

}
