import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abotu',
  templateUrl: './abotu.component.html',
  styleUrls: ['./abotu.component.css']
})
export class AbotuComponent implements OnInit {

  constructor() { }
  about = {    
    aboutheading: 'I am a Architect and web designer, front end developer. I am passionate about design and I love doing web design',
    aboutdesc:'I work from an Architecture studio and I do some jobs by my own',
    tittlephone:'phone',
    phone:'1538542914',
    tittlemail:'mail',
    mail:'lizarq@gmail.com',
    tittleweb:'website',
    website:'www.lizarq.com.ar',
    imgsrc:'assets/images/about/profile_image.jpg',    

};
  ngOnInit() {
  }

}