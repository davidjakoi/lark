import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  // @Output() slideShowEvent = new EventEmitter();
  // testWord = true;
  ngOnInit() {
    // this.slideShowEvent.emit(this.testWord.toString());
  }
}
