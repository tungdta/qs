import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'internet-mail-settings',
  templateUrl: './internetMailSettings.component.html',
})
export class InternetMailSettingsComponent {

  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      accountName: [null, Validators.compose([Validators.required])],
      displayName: [null, Validators.compose([Validators.required])],
      password: new FormControl('', Validators.required),
      incomingImapServer: [null, Validators.compose([Validators.required])],
      incomingImapPort: [null, Validators.compose([Validators.required, CustomValidators.number])],
      outgoingImapServer: [null, Validators.compose([Validators.required])],
      outgoingImapPort: [null, Validators.compose([Validators.required, CustomValidators.number])],
    });
  }
}
