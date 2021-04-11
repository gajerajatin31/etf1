import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $('#toggle').click(function () {
      console.log("click toggle");
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
    });
  }

}
