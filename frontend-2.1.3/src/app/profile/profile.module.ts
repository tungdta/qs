import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule, MdTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProfileRoutes } from './profile.routing';
import {ProfileComponent} from './profile.component';

import {ProfileEditComponent} from './edit/edit.component';

import {ProfilePasswordComponent} from './password/password.component';

import {ProfileEmailSettingsComponent} from './emailSettings/emailSettings.component';

import {ProfileConfigNotificationComponent} from './configNotification/configNotification.component';

import {ProfileService} from './profile.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MdTabsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileEditComponent,
    ProfileEmailSettingsComponent,
    ProfilePasswordComponent,
    ProfileConfigNotificationComponent
  ],
  providers: [
    ProfileService
  ],
  exports: [
    RouterModule
  ]
})

export class ProfileModule { }
