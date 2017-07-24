import { Routes } from '@angular/router';

import {ProfileComponent}  from './profile.component'

import {ProfileEditComponent} from './edit/edit.component';

import {ProfilePasswordComponent} from './password/password.component';

import {ProfileEmailSettingsComponent} from './emailSettings/emailSettings.component';

import {ProfileConfigNotificationComponent} from './configNotification/configNotification.component';

export const ProfileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'edit', component: ProfileEditComponent },
      { path: 'password', component: ProfilePasswordComponent },
      { path: 'emailSettings', component: ProfileEmailSettingsComponent },
      { path: 'configNotification', component: ProfileConfigNotificationComponent }
    ]
  }
];
