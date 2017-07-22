import { CompanyEdit } from './../../companyHome/companyEdit/companyEdit.component';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {
    AgentQueueService,
    AgentListService,
    QueueListService,
    MyTranslateService,
    ConversationService,
    ContactService
} from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact, Company } from '../../../../shared/model/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'contact-info',
    templateUrl: './contactInfo.html'
})

export class ContactInfo implements OnInit {
    @Input() contactId: string;
    contact: Contact;
    dialogRef: MdDialogRef<CompanyEdit>;

    constructor(
        private conversationService: ConversationService,
        private contactService: ContactService,
        public dialog: MdDialog,
        private translate: MyTranslateService
    ) { }

    ngOnInit() {
        this.contact = this.contactService.getContactDetail(this.contactId);
        // Trong trường hợp F5 thì dũ liệu trong this.contactlist bị mất, nên gọi rest api lấy chi tiết về contact
        if (this.contact == null) {
            this.contactService.getContactItem(this.contactId).subscribe(
                contactx => {
                    this.contact = contactx;
                });
        }
    }

    onEdit(contact: Contact) {
        let config = new MdDialogConfig();
        config.disableClose = true;
        config.width = '600px';
        config.height = '540px';
        this.dialogRef = this.dialog.open(CompanyEdit, config);

        this.dialogRef.componentInstance.org_contact = contact;
    }
}
