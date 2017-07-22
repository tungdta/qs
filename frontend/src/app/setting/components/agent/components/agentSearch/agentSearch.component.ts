import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../../../shared/service/';
import { AgentQueue, AgentQueueSearch } from '../../../../../shared/model/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
  selector: 'agent-search',
  templateUrl: './agentSearch.html'
})

export class AgentSearch implements OnInit {
  queuelist: string[];
  agentlist: string[];
  searchQueuelist: string[];
  searchAgentlist: string[];

  currentAgent = "";
  currentQueue = "";

  org_currentAgent = "";
  org_currentQueue = "";

  tdDisabled = false;
  tdAuto: string;
  tdAuto2: string;

  constructor(
    private agentqueueService: AgentQueueService,
    private agentListService: AgentListService,
    private queueListService: QueueListService,
    private translate: MyTranslateService) {
  }

  ngOnInit() {
    this.getAgentList();
    this.getQueueList();
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

  filterAgent(val: string) {
    return val ? this.agentlist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.agentlist;
  }

  filterQueue(val: string) {
    return val ? this.queuelist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.queuelist;
  }

  filterTable() {
    if ((this.currentAgent == this.org_currentAgent) && (this.currentQueue == this.org_currentQueue)) {
      console.log("Do nothing");
    } else {
      this.org_currentAgent = this.currentAgent;
      this.org_currentQueue = this.currentQueue;

      this.agentqueueService.searchModel.agent_id = this.currentAgent;
      this.agentqueueService.searchModel.queue_id = this.agentqueueService.getQueueIdByQueueName(this.currentQueue);

      this.agentqueueService.loadDataTable();
    }
  }
}
