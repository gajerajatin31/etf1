import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $('#toggle').click(function () {
    //   $(this).toggleClass('active');
    //   $('#overlay').toggleClass('open');
    // });
  }

}
