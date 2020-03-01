import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;

  constructor() { 
    emailjs.init('user_bkkSp1qao3JnenIgE2Cud');

  //   var template_params = {
  //     "reply_to": "hii",
  //     "from_name": "reshab24vai@gmail.com",
  //     "to_name": "nitiwadji149@gmail.com",
  //     "message_html": "i really need you "
  //  }

  //   emailjs.send('gmail','template_NJN8vhwC',template_params)
  //   .then((response) => {
  //      console.log('SUCCESS!', response.status, response.text);
  //   }, (err) => {
  //      console.log('FAILED...', err);
  //   });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    '#myForm'
  }
  form = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(3)]),
    email_name: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])

  });
  get username() {
    return this.form.get('username');
  }
  get email_name() {
    return this.form.get('email_name');
  }

  get message() {
    return this.form.get('message');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
      var template_params = {
      "reply_to": "hii",
      "from_name": this.form.value.email_name,
      "to_name": "info@ibpcrakuae.com",
      "message_html": this.form.value.message
   }

    emailjs.send('gmail','template_NJN8vhwC',template_params)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });

    alert('SUCCESS!! :-)')
  }

}
