import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-termsand',
  templateUrl: './termsand.component.html',
  styleUrls: ['./termsand.component.css']
})
export class TermsandComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routeBook(){
    this.router.navigate(['/privacy-policy']);

  }
}
