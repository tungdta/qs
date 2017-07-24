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
import { CompanyRouting } from './company.routing';

//From NG2-Admin
import { CompanyComponent } from './company.component';
import { HttpModule, Http } from '@angular/http';

//From myself
import {
  AgentQueueService,
  AgentListService,
  QueueListService,
  MyTranslateService,
  ContactService,
  ConversationService,
  DealService,
  CompanyService,
} from '../shared/service/';
import { SharedModule } from '../shared/shared.module';
import { NotificationBarModule } from 'angular2-notification-bar'

import { CompanyEdit } from './components/companyHome/companyEdit/';
import { CompanyAdd } from './components/companyHome/companyAdd/';
import { CompanyResult } from './components/companyHome/companyResult/';
import { CompanySearch } from './components/companyHome/companySearch/';
import { MenuButton } from './components/companyHome/menuButton/';
import { CompanyDetail } from './components/companyDetail/';
import { CompanyHome } from './components/companyHome/';
import { ConversationResult } from './components/companyDetail/conversationResult/';
import { ContactInfo } from './components/companyDetail/contactInfo/contactInfo.component';
import { ActivityResult } from './components/companyDetail/activityResult/activityResult.component';
import { DealResult } from './components/companyDetail/dealResult/dealResult.component';
import { TabActivity } from './components/companyDetail/tabActivity/tabActivity.component';
import { TaskService } from '../shared/service/task.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyRouting,
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
    CompanyComponent,
    CompanyEdit,
    CompanyAdd,
    CompanyResult,
    CompanySearch,
    CompanyDetail,
    CompanyHome,
    ConversationResult,
    ContactInfo,
    ActivityResult,
    DealResult,
    TabActivity,
    MenuButton
  ],
  providers: [
    AgentQueueService,
    QueueListService,
    AgentListService,
    ContactService,
    CompanyService,
    ConversationService,
    DealService,
    TaskService,
    MyTranslateService
  ],
  entryComponents: [CompanyEdit, CompanyAdd, CompanyDetail, CompanyHome],
  exports: [
    SharedModule
  ]

})
export class CompanyModule { }
