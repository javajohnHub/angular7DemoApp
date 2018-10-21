import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router) {

  }

}
