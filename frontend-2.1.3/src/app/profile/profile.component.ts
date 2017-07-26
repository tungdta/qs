import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {
  constructor() {
  }
}
