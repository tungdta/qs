import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
// SessionStorage
import { LocalStorageService } from 'angular-2-local-storage';

// lodash
import * as _ from 'lodash';

// export class User {
//   constructor(public user: string, public password: string, public captcha: string) { }
// }



@Injectable()
export class AuthService {

  // isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public auth: any;


  constructor(public sessionStorage: LocalStorageService) { };


  login(): Observable<boolean> {
    let objectReturn = {
      'token': 'ashdasjdaklsdasd',
      'currentUser': {
        'id': 1,
        'email': 'hoangdt@dcv.vn',
        'accountLocked': false,
        'name': 'Đặng Thái Hoàng'
      },
      permissions: [
        'full'
      ],
      roles: [
        {
          'code': 'ADMIN',
          'id': 1,
          'name': 'Quản trị hệ thống'
        }
      ]
    }
    this.sessionStorage.set('auth', objectReturn);
    this.auth = objectReturn;
    return Observable.of(true);
  }

  logout(): boolean {
    this.sessionStorage.remove('auth');
    this.auth = undefined;
    return true;
  }

  validate(): Boolean {
    return true;
  }

  init(): void {
    if (this.isLoggedIn()) {
      this.auth = this.current();
    }
  };
  current(): any {
    return this.sessionStorage.get('auth');
  }

  isLoggedIn(): Boolean {
    return this.sessionStorage.get('auth') != null;
  }

  checkPermissionForView(view: any): Boolean {
    if (!view.permissions) {
      return true;
    }
    console.log('Check quyền: ' + view.permissions);
    return this.userHasPermissionForView(view);
  }

  userHasPermissionForView(view: any): Boolean {
    if (!this.isLoggedIn()) {
      return false;
    }

    if (!view.permissions || !view.permissions.length) {
      return true;
    }
    return this.userHasPermission(view.permissions);
  }

  userHasPermission(permissions: string[]): Boolean {

    if (!this.isLoggedIn()) {
      return false;
    }

    if (!permissions || permissions.length === 0 || (permissions.length === 1 && permissions[0] === '')) {
      return true;
    }

    let found = false;
    this.init();
    _.forEach(permissions, (permission) => {
      if (_.indexOf(this.auth.permissions, permission) >= 0) {
        found = true;
      }
    });
    return found;
  }

}
