import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) {


  }

  ngAfterViewInit() {
  	$(".owl-carousel").owlCarousel({
      margin:0,
      loop:true,
      dots: true,
      nav: true,
      autoplay: true,
      autoPlaySpeed: 5000,
      autoPlayTimeout: 5000,
      autoplayHoverPause: true,
      items: 1
    });  
  }
  ngOnInit(): void {


      // $('#toggle').click(function () {
      //   $(this).toggleClass('active');
      //   $('#overlay').toggleClass('open');
      // });

  }
  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
