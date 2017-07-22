import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {
    AgentQueueService,
    AgentListService,
    QueueListService,
    MyTranslateService,
    ConversationService,
    DealService
} from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact, Deal } from '../../../../shared/model/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'deal-result',
    templateUrl: './dealResult.html'
})

export class DealResult implements OnInit {
    @Input() contactId: string;
    deal_list: Deal[];

    iconItems = [{
        id: 'clone',
        text: 'CLONE',
        icon: 'content_copy'
    },
    {
        id: 'edit',
        text: 'EDIT',
        icon: 'edit'
    },
    {
        id: 'delete',
        text: 'DELETE',
        icon: 'delete'
    }
    ];

    constructor(
        private dealService: DealService,
        private translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.deal_list = this.dealService.getDealListByCompany(this.contactId);
    }
}