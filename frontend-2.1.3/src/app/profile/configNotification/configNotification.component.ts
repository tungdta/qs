import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmService } from '../../shared/service/confirm/confirm.service';

@Component({
  selector: 'my-profile-config-notification',
  templateUrl: './configNotification.component.html',
})
export class ProfileConfigNotificationComponent {


  firstToggle: boolean;

  systems: Object[] = [{
    name: 'Lights',
    on: false,
  }, {
    name: 'Surround Sound',
    on: true,
  }, {
    name: 'T.V.',
    on: true,
  }, {
    name: 'Entertainment System',
    on: true,
  }, ];

  constructor(private confirm: ConfirmService) { }

  onFormSubmit() {
    this.confirm.success('test');
  }

}
