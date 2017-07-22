import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SesionService } from '../session.service';
import { ConfirmService } from '../../shared/service/confirm/confirm.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signin',
  templateUrl: './resetPassword.component.html'
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  confirmPassword: string;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private sessionService: SesionService, private confirmServic: ConfirmService) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit() {
    const activeCode = this.route.snapshot.paramMap.get('activeCode') || '';
    this.sessionService.resetPassword(activeCode, this.password, this.confirmPassword).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/session/signin'])
          this.confirmServic.success('resetPassword.success');
        } else {
          this.confirmServic.error('resetPassword.fail');
        }
      }
    );

  }
}
