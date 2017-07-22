import {Component} from '@angular/core';

@Component({
  selector: 'agent',
  templateUrl: './agent.html',
  //template: `<strong>My page content here</strong>`,
})

export class Agent {
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  constructor() {
  }
}
