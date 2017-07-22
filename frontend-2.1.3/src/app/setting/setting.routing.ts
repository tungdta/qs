import { Routes, RouterModule } from '@angular/router';

import { Setting } from './setting.component';
import { Agent } from './components/agent/agent.component';
import { BlackList } from './components/blacklist/blacklist.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: "Agent" },
    children: [
      { path: 'agent', component: Agent },
      { path: 'blacklist', component: BlackList }
    ]
  }
];

export const routing = RouterModule.forChild(routes);