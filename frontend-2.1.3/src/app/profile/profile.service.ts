
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export const GET_PROFILE = '/api/get';
export const UPDATE_PROFILE = '/api/update';
export const CHANGE_PASS = '/api/changePass';
export const GET_NOTIFICATION_INFO = '/api/getNotificationInfo';
export const CONFIG_NOTIFICATION = '/api/configNotification';
export const DISABLE_NOTIFICATION = '/api/disableNotification';
export const CONNECT_EMAIL_SETTINGS = '/api/connectEmail';


@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  getProfile() {
    const body = {
    };
    this.http.post(GET_PROFILE, body);
    return Observable.of(true).delay(1000);
  }

  updateProfile(department: string, avatarFileName?: string, phone?: string) {
    const body = {
      department: department,
      avatarFileName: avatarFileName,
      phone: phone
    };
    this.http.post(UPDATE_PROFILE, body);
    return Observable.of(true).delay(1000);
  }

  changePass(oldPassword: string, password: string, confirmPassword: string, tokenCaptcha: string) {
    const body = {
      oldPassword: oldPassword,
      password: password,
      confirmPassword: confirmPassword,
      tokenCaptcha: tokenCaptcha
    };
    this.http.post(CHANGE_PASS, body);
    return Observable.of(true).delay(1000);
  }

  getNotificationInfo() {
    const body = {
    };
    this.http.post(GET_NOTIFICATION_INFO, body);
    return Observable.of(true).delay(1000);
  }

  configNotification() {
    const body = {
    };
    this.http.post(CONFIG_NOTIFICATION, body);
    return Observable.of(true).delay(1000);
  }

  disableNotification() {
    const body = {
    };
    this.http.post(DISABLE_NOTIFICATION, body);
    return Observable.of(true).delay(1000);
  }

  connectEmailSettings() {
    const body = {
    };
    this.http.post(CONNECT_EMAIL_SETTINGS, body);
    return Observable.of(true).delay(1000);
  }

}
