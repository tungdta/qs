import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../../shared/model/';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../../shared/service/contact.service';
import { ConversationService } from '../../../shared/service/conversation.service';
import { Company } from '../../../shared/model/company';
import { CompanyEdit } from './../companyHome/companyEdit/companyEdit.component';
import { Conversation } from '../../../shared/model/conversation';

@Component({
  selector: 'viewCompany',
  templateUrl: './companyDetail.html',
  inputs: ['company']
})

export class CompanyDetail implements OnInit {

  contact_id: string;
  contact: Contact;
  conversation_list: Conversation[];
  // Standard tabs demo
  tabs = [{
    label: 'Task',
    content: 'Lots of experience in dealing with height issues :) I used Chrome devtools to see that the mat-tab-body-content element was not fixing its height to the height of its parent, which means its children will not be able to infer anything about the tab height',
    disabled: false
  }, {
    label: 'Appoinment',
    content: 'This is the body of the third tab',
    disabled: false
  }, {
    label: 'File',
    content: 'This is the body of the fourth tab',
    disabled: false
  }];

  constructor(
    private contactService: ContactService,
    private conversationService: ConversationService,
    private notificationBarService: NotificationBarService,
    public dialog: MdDialog,
    private translate: MyTranslateService,
    private currentRouted: ActivatedRoute
  ) { }
  ngOnInit() {
    console.log('Company Detail On Init');
    this.currentRouted.params.subscribe(params => {
      this.contact_id = params['company'];
      this.contact = this.contactService.getContactDetail(this.contact_id);

      //this.conversationService.loadData();
    });
  }
}
