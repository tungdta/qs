import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-profile-config-notification',
  templateUrl: './configNotification.component.html',
})
export class ProfileConfigNotificationComponent {

  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

  constructor() { }
}
