import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $('#toggle').click(function () {
    //   $(this).toggleClass('active');
    //   $('#overlay').toggleClass('open');
    // });
  }

}
