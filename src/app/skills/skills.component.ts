import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

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
