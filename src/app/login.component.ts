import { Component, VERSION } from '@angular/core';
//import { FormGroup, /*FormControl*/, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  /* form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });*/

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.form.value);
  }
}
