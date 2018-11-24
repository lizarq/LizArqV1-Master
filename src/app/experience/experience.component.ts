import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  experiencia= {
    item:[
     {anio:'Mar 2016 - Present',
     titulo1:'Architect',
     LugarTrabajo:'Estudio Janin',
     ciudad: 'Buenos Aires, Argentina',
     descripcion: 'Feasibility study of parcel and creation of preliminary schemes, generating documentation in order to build and present to Local Authorities. Computing materials in Revit for brickwork in order to achieve Measures and Quantity Takeoffs (QTO) in Block for Flat Buildings. ' +
     'Also included, creation of detail plans for bathrooms, doors, windows, kitchens and coordination of external consultants.',
     
    anio1:'August 2015- November 2015',
    titulo2:'Jr Architect',
    LugarTrabajo1:'Mc Arquitectura',
    ciudad1: 'Buenos Aires, Argentina',
    descripcion1: 'Drawing architecture plans (sections, views and plans) . Analysis for structural proposals. Remodeling and Interior Design Renders .'
    },
   
    {
    anio:'September  2015- December 2014',
    titulo1:'Jr Architect',
    LugarTrabajo:'Estudio Crudo Design',
    ciudad: 'Buenos Aires, Argentina',
    descripcion: 'Drawing architecture plans (section,views and plans). Creating Measures and Quantity Takeoffs (QTO), buying materials. Certifying works, Prepare contracts and Contact with the client. ',
    anio1:'August 2014 - March 2014',
    titulo2:' Jr Architect',
    LugarTrabajo1:'Gerardo Diaz y Asociados ',
    ciudad1: 'Buenos Aires, Argentina',
    descripcion1: 'Generating hyperrealist interiors, exteriors, daylight and night images in 3dMax '
  
  },  
     
 

    {anio:'March 2014 - November 2013',
    titulo1:'Freelance Sketcher',
    LugarTrabajo:'Constructora EMAVE',
    ciudad: 'Buenos Aires, Argentina',
    descripcion: 'Drawing architecture plans  (detail, section,views and plans).'+ 
    'Generating the interior views of bathrooms and kitchens. Creating lists of project materials, such as doors and windows. As an additional the measure and QTO curve was developed'
     },  



   
    ]
    
  };
}
