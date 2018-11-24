import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  model:any={}
  datosContacto = {
    Marca: "LizArq",
    Profesion: "Arquitecta",
    Tel: "1538542914",
    Mail: "lizarq@gmail.com",
    site: "lizarq@gmail.com" 
  }
  ngOnInit() {
  }

}
