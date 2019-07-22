import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager-app',
  template: `
  <app-side-nav></app-side-nav>
  `,
  styleUrls: ['./contactmanager-app.component.scss']
})
export class ContactmanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
