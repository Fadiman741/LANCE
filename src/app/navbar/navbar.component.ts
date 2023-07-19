import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  goHome() {
    this.scroller.scrollToAnchor("home");
  }
  goDown1() {
    this.scroller.scrollToAnchor("about");
  }

  goDown2() {
    this.scroller.scrollToAnchor("Whatwedo");
  
  }

  goDown3() {
    this.scroller.scrollToAnchor("Howwedoit");
  }

}
