import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  educacion = {
    item:[
     {anio:'2016',
     titulo1:'PostGrade in BIM tecnologyes',
     lugarEst:'Universidad de Buenos Aires',
     ciudad: 'Buenos Aires, Argentina',
     descripcion: 'Learning about the importance of collaborating with project stakeholders in addition to the benefits and issues inherent in BIM and its implementation.'
    },
    {anio:'2015-2008',
     titulo1:'Architect',
     lugarEst:'Universidad de Buenos Aires',
     ciudad: 'Buenos Aires, Argentina',
     descripcion: 'Architecture Major. Includes instruction in architectural design, history, and theory; building structures and environmental systems; project and site planning; construction; professional responsibilities and standards; and related cultural, social, economic, and environmental issues.'
     },
     {anio:'2008-2003',
     titulo1:'Architect',
     lugarEst:'Ort Argentina',
     ciudad: 'Buenos Aires, Argentina',
     descripcion: 'Architecture Major. Includes instruction in architectural design, history, and theory; building structures and environmental systems; project and site planning; construction; professional responsibilities and standards; and related cultural, social, economic, and environmental issues.'
     }

    ]
    
  };
}
