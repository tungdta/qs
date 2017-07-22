import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
    selector: 'agent-queue-add',
    templateUrl: './agentqueueAdd.html'
})

export class AgentQueueAdd implements OnInit {
    agent_id: string;
    queue_id: string;
    queue_name: string;
    priority: string;

    queuelist: string[];
    agentlist: string[];
    searchQueuelist: string[];
    searchAgentlist: string[];

    public form: FormGroup;
    filteredAgent: Observable<string[]>;
    test: string;

    //filteredQueue: Observable<string[]>;
    //filteredQueue: Observable<string[]>;

    //agent_id_control = new FormControl('', Validators.required);
    //queue_name_control = new FormControl('', Validators.required);
    //priority_control = new FormControl('', Validators.required, CustomValidators.range([1, 10]));

    constructor(
        private fb: FormBuilder,
        private agentqueueService: AgentQueueService,
        private agentListService: AgentListService,
        private queueListService: QueueListService,
        public dialogRef: MdDialogRef<AgentQueueAdd>,
        private notificationBarService: NotificationBarService,
        public translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.getAgentList();
        this.getQueueList();

        this.form = this.fb.group({
            agent_id_control: [null, Validators.compose([Validators.required])],
            queue_name_control: [null, Validators.compose([Validators.required])],
            priority_control: [null, Validators.compose([Validators.required, CustomValidators.range([1, 10])])],
        });

        //this.test = this.translate.get('AGENT_ID');
        //console.log("TEST=" + this.test);

        //this.filteredAgent = this.form.controls['agent_id_control'].valueChanges
        //.startWith(null)
        //    .map(val => val ? this.agentlist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.agentlist);

        //this.filteredQueue = this.form.controls['queue_name_control'].valueChanges
        //.startWith(null)
        //    .map(val => val ? this.queuelist.filter((s) => s.match(new RegExp(val, 'gi'))) : this.queuelist);
    }

    getAgentList() {
        this.agentListService.getAgentList("").subscribe(data => {
            this.agentlist = data;
            this.searchAgentlist = data;
        });
    }

    getQueueList() {
        this.queueListService.getQueueListFull("").subscribe(data => {
            this.queuelist = data;
            this.searchQueuelist = this.queuelist;
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

        this.translate.get("TEST");
        //this.translate.get('AGENT_ID')
    }

    onSubmit(event) {

        let queue_id = this.agentqueueService.getQueueIdByQueueName(this.form.controls['queue_name_control'].value);
        console.log("queue_id=" + queue_id);
        if (queue_id != "") {
            this.agentqueueService.addAgentQueue(this.form.controls['agent_id_control'].value, queue_id, this.form.controls['priority_control'].value).subscribe(
                response => {
                    this.notificationBarService.create({ message: 'ADDNEW THÀNH CÔNG', type: NotificationType.Success });
                });
            this.dialogRef.close();
            this.dialogRef = null;

        }
        else {
            this.dialogRef.close();
            this.dialogRef = null;
            this.notificationBarService.create({ message: 'ADD KHÔNG THÀNH CÔNG', type: NotificationType.Warning });
        }
    }
}