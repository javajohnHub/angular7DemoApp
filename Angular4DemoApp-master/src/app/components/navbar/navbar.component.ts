import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  public status: { isopen: boolean } = { isopen: false };
  constructor(private router: Router) {

  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
