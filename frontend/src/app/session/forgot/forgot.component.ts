import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import {SesionService} from '../session.service';
import {ConfirmService} from '../../shared/service/confirm/confirm.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  email: string;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
    private sesionService: SesionService, private confirmService: ConfirmService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, CustomValidators.email])]
    });
  }

  onSubmit() {
    console.log(`Forgot password: ${this.email}`)
    this.sesionService.forgotPassword(this.email).subscribe(
      data => {
        if (data) {
          this.confirmService.success('forgotPassword.success');
          this.router.navigate(['/session/signin']);
        } else {
          this.confirmService.error('forgotPassword.error');
        }
      }
    )

  }

}
