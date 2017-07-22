import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
import { ConfirmService } from '../../shared/service/confirm/confirm.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private confirm: ConfirmService) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])], password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    console.log('log in');
    if (this.auth.login()) {
      this.confirm.success('login.success');
      this.router.navigate(['/dashboard']);
    } else {

    }

  }

}
