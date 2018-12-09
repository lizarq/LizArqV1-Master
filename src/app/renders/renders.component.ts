import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {DEMO_GALLERY_CONF_INLINE, DEMO_GALLERY_RENDERS} from "../config";
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";


@Component({
  selector: 'app-renders',
  templateUrl: './renders.component.html',
  styleUrls: ['./renders.component.css']
})
export class RendersComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }
  public showConf: boolean = true;
  @ViewChild('ngxImageGallery') ngxImageGallery: NgxImageGalleryComponent;

  title = 'Demo App';

  // gallery configuration
  conf: GALLERY_CONF = DEMO_GALLERY_CONF_INLINE;

  // gallery images
  images: GALLERY_IMAGE[] = DEMO_GALLERY_RENDERS;

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    // console.log(this.ngxImageGallery);
    // this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
    
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    // this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage() {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage() {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
    this.cancelForm();
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
    // this.ngxImageGallery.open(index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }

   cancelForm(){
   
    this.router.navigate(['../Home'])
  }
}
