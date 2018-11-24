import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }
  Redes = {
    
    Social:[
      {
        url:"https://github.com/lizarq",
        iclass:"flaticon-github-logo",
        name:"GitHub"         
      } , 
      {
        url:"https://www.behance.net/glaseryanina",
        iclass:"flaticon-behance-logo",
        name:"behance"      
      } 

    ],
    Social1:[
      {
        url:"https://www.linkedin.com/in/yaninaglaser",
        iclass:"fa fa-linkedin",
        name:"Linkedin"              
      } , 
      {
        url:"https://www.instagram.com/lizarchitecture",
        iclass:"fa fa-instagram",
        name:"Instagram"              
      } 
   ],


   
};
  ngOnInit() {
  }

}
