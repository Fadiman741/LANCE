import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router,private scroller: ViewportScroller) { }

  ngOnInit() {
  }
  routeBook(){
    this.router.navigate(['/book-a-call']);

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
  goHome() {
    this.scroller.scrollToAnchor("home");
  }

  routePrivacy(){
    this.router.navigate(['/privacy-policy']);

  }

}
