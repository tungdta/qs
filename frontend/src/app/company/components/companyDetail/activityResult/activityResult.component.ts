import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService, ConversationService } from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../../../shared/model/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'activity-result',
    templateUrl: './activityResult.html'
})

export class ActivityResult implements OnInit {
    @Input() contactId:string;
    company_id: string;

    constructor(
        private conversationService: ConversationService,
        private translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.conversationService.loadData();
    }
}