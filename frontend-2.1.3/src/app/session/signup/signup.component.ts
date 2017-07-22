import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import {SesionService} from '../session.service';
import {ConfirmService} from '../../shared/service/confirm/confirm.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: number;
  department: string;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
    private sesionService: SesionService, private confirmService: ConfirmService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: password,
      confirmPassword: confirmPassword,
      phone: [null, Validators.compose([CustomValidators.number])],
      department: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.sesionService.register(this.username, this.name, this.email, this.password,
      this.confirmPassword, this.department, this.phone).subscribe(
      data => {
        if (data) {
          this.confirmService.success('signUp.succes');
          this.router.navigate(['/dashboard']);
        } else {
          this.confirmService.error('signUp.fail');
        }
      }
      )
  }
}
