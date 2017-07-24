import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'my-profile-password',
  templateUrl: './password.component.html',
})
export class ProfilePasswordComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: [null, Validators.compose([Validators.required])],
      password: password,
      confirmPassword: confirmPassword
    });
  }
}
