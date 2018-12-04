import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancel(){
    this.cancelForm();
  }
  cancelForm(){
    console.log("cancel")
    this.router.navigate(['../Portfolio'])
  }
}
