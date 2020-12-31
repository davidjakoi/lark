import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  index = this.route.snapshot.params.id;
  clickedIndex;
  isSlideShow: boolean = false;
  testWord = 'trueka';
  @Output() slideShowEvent = new EventEmitter();

  images = [
    [{
      src: '../../../img/gallery0/0.jpg'
    },
    {
      src: '../../../img/gallery0/1.jpg'
    },
    {
      src: '../../../img/gallery0/2.jpg'
    },
    {
      src: '../../../img/gallery0/3.jpg'
    },
    ],
    [
      {
        src: '../../../img/gallery1/0.jpg'
      },
      {
        src: '../../../img/gallery1/1.jpg'
      },
      {
        src: '../../../img/gallery1/2.jpg'
      },
      {
        src: '../../../img/gallery1/3.jpg'
      },
      {
        src: '../../../img/gallery1/4.jpg'
      },
    ],
    [
      {
        src: '../../../img/gallery2/0.jpg'
      },
      {
        src: '../../../img/gallery2/1.jpg'
      },
      {
        src: '../../../img/gallery2/2.jpg'
      },
    ],
    [
      {
        src: '../../../img/gallery3/0.jpg'
      },
      {
        src: '../../../img/gallery3/1.jpg'
      },
      {
        src: '../../../img/gallery3/2.jpg'
      },
      {
        src: '../../../img/gallery3/3.jpg'
      },
      {
        src: '../../../img/gallery3/4.jpg'
      },
      {
        src: '../../../img/gallery3/5.jpg'
      },
      {
        src: '../../../img/gallery3/6.jpg'
      },
      {
        src: '../../../img/gallery3/7.jpg'
      },
      {
        src: '../../../img/gallery3/8.jpg'
      },
    ]
  ]
  ngOnInit() {
  }

  openImage(i) {
    this.clickedIndex = i;
    this.isSlideShow = true;
    this.slideShowEvent.emit(this.isSlideShow);
  }

  previous(i) {
    this.clickedIndex = this.clickedIndex -1;
  }

  next(i) {
    this.clickedIndex = this.clickedIndex + 1;
  }

  close(){
    this.isSlideShow = false;
  }
}
