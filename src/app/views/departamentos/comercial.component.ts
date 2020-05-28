import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.component.html',
})
export class ComercialComponent implements OnInit {

  constructor() { }

  isCollapsed = false;

  ngOnInit() {
  }

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }



}
