import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'my-profile-edit',
  templateUrl: './edit.component.html',
})
export class ProfileEditComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      // username: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      // email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required, CustomValidators.phone('en-US')])],
    });
  }
}
