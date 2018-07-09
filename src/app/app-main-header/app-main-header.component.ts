import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './app-main-header.component.html',
  styleUrls: ['./app-main-header.component.scss']
})
export class AppMainHeaderComponent implements OnInit {

  isSignedIn = true;

  constructor() { }

  ngOnInit() {
  }
}
