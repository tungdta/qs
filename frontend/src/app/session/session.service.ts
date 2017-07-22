
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export const RESGISTER = '/api/register';
export const REST_PASSWORD = '/api/resetPassword';
export const ACTIVE_USER = '/api/activeUser';


@Injectable()
export class SesionService {
  constructor(private http: HttpClient) {
  }

  register(username: string, name: string, email: string, password: string,
    confirmPassword: string, department: string, phone?: number, captchaToken?: string) {
    const body = {
      username: username,
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      department: department,
      phone: phone,
      captchaToken: captchaToken
    };
    console.log(`register object: ${JSON.stringify(body)}`)

    this.http.post(RESGISTER, body);
    return Observable.of(true).delay(1000);
  }

  forgotPassword(email: string, captchaToken?: string) {
    const body = {
      email: email,
      captchaToken: captchaToken
    };

    this.http.post(REST_PASSWORD, body);
    return Observable.of(true).delay(1000);
  }

  resetPassword(activeCode: string, password: string, confirmPassword: string, captchaToken?: string) {
    const body = {
      activeCode: activeCode,
      password: password,
      confirmPassword: confirmPassword,
      captchaToken: captchaToken
    };
    this.http.post(ACTIVE_USER, body);
    return Observable.of(true).delay(1000);
  }

}
