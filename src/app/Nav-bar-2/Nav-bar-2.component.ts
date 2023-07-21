import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Navbar2',
  templateUrl: './Nav-bar-2.component.html',
  styleUrls: ['./Nav-bar-2.component.css']
})
export class NavBar2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routeHome(){
    this.router.navigate(['/']);

  }
}
