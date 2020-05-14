import {Component} from '@angular/core';

import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  minimized = false;
  public navItems = [...navItems];

  status: { isOpen: boolean } = { isOpen: false };
  disabled = false;
  isDropup = true;
  autoClose = false;

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];



  toggleMinimize(e) {
    this.minimized = e;
  }


  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
