import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../../../shared/service/';
import { AgentQueueEdit } from '../agentqueueEdit/';
import { AgentQueue } from '../../../../../shared/model/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
    selector: 'agent-result',
    templateUrl: './agentResult.html'
})

export class AgentResult implements OnInit {
    dialogRef: MdDialogRef<AgentQueueEdit>;

    columns = [
        { name: 'Agent ID', prop: 'agent_id', },
        { name: 'Queue ID', prop: 'queue_id' },
        { name: 'Queue Name', prop: 'queue_name' },
        { name: 'Priority', prop: 'priority' }
    ];

    constructor(
        private agentqueueService: AgentQueueService,
        private notificationBarService: NotificationBarService,
        public dialog: MdDialog,
        private translate: MyTranslateService)
    { }
    ngOnInit() {
        //this.agentqueueService.loadDataTable();
    }

    edit(row) {
        let config = new MdDialogConfig();
        config.disableClose = true;
        config.width = "600px";
        config.height = "430px";
        this.dialogRef = this.dialog.open(AgentQueueEdit, config);
        this.dialogRef.componentInstance.org_agent_id = row.agent_id;
        this.dialogRef.componentInstance.org_queue_id = row.queue_id;
        this.dialogRef.componentInstance.org_queue_name = "[" + row.queue_id + "] " + row.queue_name;
        this.dialogRef.componentInstance.org_priority = row.priority;

        //this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
    }

    delete(row) {
        this.agentqueueService.deleteAgentQueue(row.agent_id, row.queue_id).subscribe(
            response => {
                this.notificationBarService.create({ message: 'DELETE THÀNH CÔNG', type: NotificationType.Success });
            });
    }

    send(row) {

    }
}

