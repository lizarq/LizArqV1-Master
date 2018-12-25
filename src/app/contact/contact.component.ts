import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  
  datosContacto = {
    Marca: "LizArq",
    Profesion: "Arquitecta",
    Tel: "1538542914",
    Mail: "lizarq@gmail.com",
    site: "lizarq@gmail.com",
    Linkedinurl:"https://www.linkedin.com/in/yaninaglaser",
    Instagramurl:"https://www.instagram.com/lizarchitecture",
    Behanceurl:"https://www.behance.net/glaseryanina"
  }

  ngOnInit() {
  }
  log(x){
    console.log(x);
  }
  click(){
    swal("Gracias por contactarse con nosotros", "En instantes enviaremos un mensaje respondiendo su consulta", 'success');
  }
  contactForm(Formulario) {
    
    swal("Formulario de contacto", "Mensaje enviado correctamente", 'success');
   
    
   }
}
