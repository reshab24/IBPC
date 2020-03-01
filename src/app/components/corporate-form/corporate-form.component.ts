import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-form',
  templateUrl: './corporate-form.component.html',
  styleUrls: ['./corporate-form.component.css']
})
export class CorporateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
