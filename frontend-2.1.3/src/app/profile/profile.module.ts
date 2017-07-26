import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProfileRoutes } from './profile.routing';
import {ProfileComponent} from './profile.component';

import {ProfileEditComponent} from './edit/edit.component';

import {ProfilePasswordComponent} from './password/password.component';

import {ProfileEmailSettingsComponent} from './emailSettings/emailSettings.component';

import {ProfileConfigNotificationComponent} from './configNotification/configNotification.component';

import {GmailSettingsComponent} from './emailSettings/gmailSettings/gmailSettings.component';
import {InternetMailSettingsComponent} from './emailSettings/internetMailSettings/internetMailSettings.component';

import { ProfileService} from './profile.service';

import {SharedModule} from '../shared/shared.module';
import { HttpModule, Http } from '@angular/http';


@NgModule({
  imports: [
    RouterModule.forChild(ProfileRoutes),
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    ProfileEmailSettingsComponent,
    ProfilePasswordComponent,
    ProfileConfigNotificationComponent,
    GmailSettingsComponent,
    InternetMailSettingsComponent
  ],
  providers: [
    ProfileService
  ],
  exports: [
    RouterModule
  ]
})

export class ProfileModule { }
