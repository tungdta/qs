import { Conversation } from './../../../../shared/model/conversation';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService, ConversationService } from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../../../shared/model/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'conversation-result',
    templateUrl: './conversationResult.html'
})

export class ConversationResult implements OnInit {
    @Input() contactId: string;
    company_id: string;
    iconItems = [{
        action: 'clone',
        text: 'CLONE',
        icon: 'clone'
    },
    {
        action: 'delete',
        text: 'DELETE',
        icon: 'delete'
    }
    ];

    constructor(
        private conversationService: ConversationService,
        private translate: MyTranslateService,
        private notificationBarService: NotificationBarService
    ) { }
    ngOnInit() {
        this.conversationService.loadData();
    }

    click(action: string, row: Conversation) {
        if (action == "clone") {
            let object = row;
            this.conversationService.cloneConversation(object);
            this.notificationBarService.create({ message: 'Cần update database task status', type: NotificationType.Success });
        } else if (action == "delete") {

        }
    }
}