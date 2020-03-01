import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamber-registration',
  templateUrl: './chamber-registration.component.html',
  styleUrls: ['./chamber-registration.component.css']
})
export class ChamberRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
