import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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


  onFormSubmit() {
    alert(`You submitted the form.`);
  }

  constructor() { }
}
