import {AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CollapseDirective} from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewChecked {

  private _isCollapsed = true;
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
       this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      }
    }
    return this._isCollapsed;
  }

  @ViewChild(CollapseDirective, { read: ElementRef, static: false }) collapse !: CollapseDirective;

  collapseRef;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {}

  ngAfterViewChecked (): void {
    this.collapseRef = this.collapse;
  }
}
