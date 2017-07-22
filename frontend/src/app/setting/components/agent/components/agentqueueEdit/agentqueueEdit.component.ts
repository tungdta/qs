import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
    selector: 'agent-queue-edit',
    templateUrl: './agentqueueEdit.html'
})

export class AgentQueueEdit implements OnInit {
    org_agent_id: string;
    org_queue_id: string;
    org_queue_name: string;
    org_priority: string;

    agent_id: string;
    queue_id: string;
    queue_name: string;
    priority: string;

    queuelist: string[];
    agentlist: string[];
    searchQueuelist: string[];
    searchAgentlist: string[];

    constructor(
        private agentqueueService: AgentQueueService,
        private agentListService: AgentListService,
        private queueListService: QueueListService,
        public dialogRef: MdDialogRef<AgentQueueEdit>,
        private notificationBarService: NotificationBarService,
        private translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.getAgentList();
        this.getQueueList();

        this.agent_id = this.org_agent_id;
        this.queue_name = this.org_queue_name;
        this.queue_id = this.org_queue_id;
        this.priority = this.org_priority;
    }

    getAgentList() {
        this.agentListService.getAgentList("").subscribe(data => {
            this.agentlist = data;
        });
    }

    getQueueList() {
        this.queueListService.getQueueListFull("").subscribe(data => {
            this.queuelist = data;
        });
    }

    filterAgent(val: string) {
        return val ? this.agentlist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.agentlist;
    }
    filterQueue(val: string) {
        return val ? this.queuelist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.queuelist;
    }

    closeDialog() {
        this.dialogRef.close();
        this.dialogRef = null;
        this.notificationBarService.create({ message: 'THOÁT THÀNH CÔNG', type: NotificationType.Success });
    }

    saveDialog() {
        let queue_id = this.agentqueueService.getQueueIdByQueueName(this.queue_name);
        console.log("queue_id=" + queue_id);
        if (queue_id != "") {
            if (queue_id == this.org_queue_id) {
                console.log("Ko làm gì");
                this.notificationBarService.create({ message: 'KHÔNG LÀM GÌ', type: NotificationType.Warning });
            }
            else {
                this.agentqueueService.updateQueue4Agent(this.agent_id, this.org_queue_id, queue_id).subscribe(
                    response => {
                        this.notificationBarService.create({ message: 'SAVE THÀNH CÔNG', type: NotificationType.Success });
                    });
                this.dialogRef.close();
                this.dialogRef = null;
            }
        }
        else {
            this.dialogRef.close();
            this.dialogRef = null;
            this.notificationBarService.create({ message: 'SAVE KHÔNG THÀNH CÔNG', type: NotificationType.Warning });
        }

    }
}