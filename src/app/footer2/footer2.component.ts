import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin ,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  faLinkedin=faLinkedin;
  faSquareWhatsapp=faSquareWhatsapp;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  routePrivacy(){
    this.router.navigate(['/privacy-policy']);

  }
  routeHome(){
    this.router.navigate(['/']);

  }

}
