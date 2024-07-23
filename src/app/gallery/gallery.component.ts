import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  index = this.route.snapshot.params.id;
  clickedIndex;
  isSlideShow: boolean = false;
  testWord = "trueka";

  images = [];
  ngOnInit() {
    for (let index = 0; index < 50; index++) {
      this.images.push({});
    }
    this.clickedIndex = Math.floor(Math.random() * 52);
    this.isSlideShow = true;
  }

  openImage(i) {
    this.clickedIndex = i;
    this.isSlideShow = true;
  }

  previous(i) {
    if (this.clickedIndex - 1 < 0) {
      this.isSlideShow = false;
      return;
    }
    this.clickedIndex = this.clickedIndex - 1;
  }

  next(i) {
    const maxLength = this.images.length + 1;
    if (this.clickedIndex + 1 >= this.images.length) {
      this.isSlideShow = false;
      return;
    }
    this.clickedIndex = this.clickedIndex + 1;
  }

  close() {
    this.isSlideShow = false;
  }
}
