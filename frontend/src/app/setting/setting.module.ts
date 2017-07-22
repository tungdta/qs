import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MaterialModule,
  MdInputModule,
  MdNativeDateModule,
  MdSelectionModule,
  MdDialogModule,
  MdCardModule,
  MdIconModule,
  MdRadioModule,
  MdButtonModule,
  MdProgressBarModule,
  MdToolbarModule
} from '@angular/material';
import { routing } from './setting.routing';

//From NG2-Admin
import { Setting } from './setting.component';
import { Agent } from './components/agent/agent.component';
import { AgentSearch } from './components/agent/components/agentSearch/agentSearch.component';
import { AgentResult } from './components/agent/components/agentResult/agentResult.component';
import { MenuButton } from './components/agent/components/menuButton/menuButton.component';
import { AgentQueueEdit } from './components/agent/components/agentqueueEdit/';
import { AgentQueueAdd } from './components/agent/components/agentqueueAdd/';
import { HttpModule, Http } from '@angular/http';

//From myself
import { AgentQueueService, AgentListService, QueueListService, MyTranslateService, BlackListService } from '../shared/service/';
//import { AgentQueueDialog } from '../shared/agentqueuedialog/';

import { SharedModule } from '../shared/shared.module';
import { NotificationBarModule } from 'angular2-notification-bar';
import { BlackList } from './components/blacklist/blacklist.component';
import { BlackListResult } from './components/blacklist/components/blacklistResult/blacklistResult.component';
import { BlackListSearch } from './components/blacklist/components/BlackListSearch/blacklistSearch.component';
//import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

//export function createTranslateLoader(http: Http) {
//  return new TranslateStaticLoader(http, './assets/i18n', '.json');
//}

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgxDatatableModule,
    MaterialModule,
    MdInputModule,
    MdNativeDateModule,
    MdSelectionModule,
    MdDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    MdCardModule,
    MdIconModule,
    MdRadioModule,
    MdButtonModule,
    MdProgressBarModule,
    MdToolbarModule,
    NotificationBarModule
    //TranslateModule.forRoot({
    //  provide: TranslateLoader,
    //  useFactory: (createTranslateLoader),
    //  deps: [Http]
    //}),
  ],
  declarations: [
    Setting,
    Agent,
    AgentSearch,
    AgentResult,
    AgentQueueEdit,
    AgentQueueAdd,
    MenuButton,
    BlackList,
    BlackListResult,
    BlackListSearch
  ],
  providers: [
    AgentQueueService,
    QueueListService,
    AgentListService,
    MyTranslateService,
    BlackListService
  ],
  entryComponents: [AgentQueueEdit, AgentQueueAdd],
  exports: [
    SharedModule
  ]

})
export class SettingModule { }
