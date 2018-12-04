import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
	Skills = {
   
    item:[
      {
        porcentaje:"90%",
        title:"adobe photoshop"         
      } , 
      {
       porcentaje:"85%",
       title:"adobe illustrator"         
      } , 
   
      {
       porcentaje:"97%",
       title:"Autocad"         
      } , 
        {
        porcentaje:"90%",
        title:"Revit"         
      }  ,
      {
        porcentaje:"90%",
        title:"3dmax"         
      }          
   ],
   item2:
    [
      {
        porcentaje:"90%",
        title:"html 5"         
      } , 
      {
       porcentaje:"85%",
       title:"css 3"         
      } , 
      {
       porcentaje:"97%",
       title:"communication"         
      } , 
      {
       porcentaje:"90%",
       title:"creativity"         
      } , 
      {
        porcentaje:"90%",
        title:"Vray"         
      }      
    ]

   
};
  ngOnInit() {
    var dataToggleTooTip = (<any>$)("[data-toggle='tooltip']");
		var progressBar = (<any>$)('.progress-bar');
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = (<any>$)(this).attr('aria-valuenow');
					(<any>$)(this).width(each_bar_width + '%');
				});
			});
		}
  }

}
