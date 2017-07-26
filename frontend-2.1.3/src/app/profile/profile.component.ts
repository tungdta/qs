import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
// sessionStorage
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {
  constructor() {
  }
}
