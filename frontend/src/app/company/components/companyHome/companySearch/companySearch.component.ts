import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService, ContactService } from '../../../../shared/service/';
import { AgentQueue, AgentQueueSearch } from '../../../../shared/model/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
  selector: 'company-search',
  templateUrl: './companySearch.html'
})

export class CompanySearch implements OnInit {
  queuelist: string[];
  agentlist: string[];
  contactNameList: string[];

  searchQueuelist: string[];
  searchAgentlist: string[];
  searchNameList: string[];

  currentName = "";
  currentCompany = "";
  currentCreateAt = "";
  currentUpdateAt = "";
  currentOwner = "";

  org_currentName = "";
  org_currentCompany = "";
  org_currentCreateAt = "";
  org_currentUpdateAt = "";
  org_currentOwner = "";

  tdDisabled = false;
  tdAuto: string;
  tdAuto2: string;

  currentView = this.translate.get('VIEW_AS');
  viewItems = [{
    id: 'my_contact',
    text: 'My Contact'
  }, {
    id: 'all_contact',
    text: 'All Contact'
  },
  {
    id: 'new_contact',
    text: 'New Contact'
  },
  {
    id: 'recent_contact',
    text: 'Recently Modified'
  }
  ];

  timeItem = [
    {
      id: 'any',
      text: 'Anytime'
    }, {
      id: 'yesterday',
      text: 'Yesterday'
    }, {
      id: 'today',
      text: 'Today'
    },
    {
      id: 'thisweek',
      text: 'This week'
    },
    {
      id: 'lastweek',
      text: 'Last week'
    },
    {
      id: 'thismonth',
      text: 'This month'
    },
    {
      id: 'lastmonth',
      text: 'Last month'
    }
  ];

  constructor(
    private agentqueueService: AgentQueueService,
    private agentListService: AgentListService,
    private queueListService: QueueListService,
    private contactService: ContactService,
    private translate: MyTranslateService) {
  }

  ngOnInit() {
    //this.getAgentList();
    //this.getQueueList();
    this.searchNameList = this.contactService.contactNameList;
    this.contactNameList = this.contactService.contactNameList;
  }

  getAgentList() {
    this.agentListService.getAgentList("").subscribe(
      data => {
        this.searchAgentlist = data;
        this.agentlist = data;
      });
  }

  getQueueList() {
    this.queueListService.getQueueListFull("").subscribe(data => {
      this.searchQueuelist = data;
      this.queuelist = data;
    });
  }

  filterName(val: string) {
    this.contactNameList = this.contactService.contactNameList;
    return val ? this.searchNameList.filter((s) => s.match(new RegExp(val, 'gi'))) : this.contactNameList;
    //return this.searchNameList;
  }

  filterAgent(val: string) {
    return val ? this.agentlist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.agentlist;
  }

  filterQueue(val: string) {
    return val ? this.queuelist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.queuelist;
  }

  filterTable() {
    if
    (
      (this.currentName == this.org_currentName)
      && (this.currentCompany == this.org_currentCompany)
      && (this.currentCreateAt == this.org_currentCreateAt)
      && (this.currentUpdateAt == this.org_currentCreateAt)
      && (this.currentOwner == this.org_currentOwner)
    ) {
      console.log("Do nothing");
    } else {
      this.org_currentCompany = this.currentCompany;
      this.org_currentCreateAt = this.currentCreateAt;
      this.org_currentCreateAt = this.currentUpdateAt;
      this.org_currentOwner = this.currentOwner;

      this.contactService.searchModel.name = this.currentName;
      this.contactService.searchModel.company = this.currentCompany;
      this.contactService.searchModel.create_at = this.currentCreateAt;
      this.contactService.searchModel.update_at = this.currentUpdateAt;

      this.contactService.loadDataTable();
    }
  }
}
