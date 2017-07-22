import { CREDENTIAL } from './../../../../shared/config/endpoint.const';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService, ContactService } from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../../../shared/model/';

@Component({
    selector: 'company-edit',
    templateUrl: './companyEdit.html'
})

export class CompanyEdit implements OnInit {
    org_contact: Contact;
    contact: Contact;
    id: string;
    name: string;
    parentName: string;
    phone: string;
    email: string;
    address: string;
    website: string;

    public form: FormGroup;

    queuelist: string[];
    agentlist: string[];
    searchQueuelist: string[];
    searchAgentlist: string[];

    constructor(
        private agentqueueService: AgentQueueService,
        private agentListService: AgentListService,
        private queueListService: QueueListService,
        private contactService: ContactService,
        public dialogRef: MdDialogRef<CompanyEdit>,
        private fb: FormBuilder,
        private notificationBarService: NotificationBarService,
        private translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.contact = this.copyFrom(this.org_contact);
        this.form = this.fb.group({
            name_control: [null, Validators.compose([Validators.required])],
            phone_control: [null],
            email_control: [null,],
            parent_org_control: [null],
            address_control: [null],
            website_control: [null],
            create_at: [null],
            create_by: [null],
            update_at: [null],
            update_by: [null],
        });
        this.form.controls['create_at'].disable();
        this.form.controls['create_by'].disable();
        this.form.controls['update_at'].disable();
        this.form.controls['update_by'].disable();
    }

    getAgentList() {
        this.agentListService.getAgentList('').subscribe(data => {
            this.agentlist = data;
        });
    }

    getQueueList() {
        this.queueListService.getQueueListFull('').subscribe(data => {
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
        //this.notificationBarService.create({ message: 'THOÁT THÀNH CÔNG', type: NotificationType.Success });
    }

    onSubmit(event) {
        /*
        this.contact.id = this.id;
        this.contact.name = this.name;
        this.contact.parentName = this.parentName;
        this.contact.phone = this.phone;
        this.contact.email = this.email;
        this.contact.address = this.address;
        this.contact.website = this.website;
        */
        if (this.org_contact == this.contact) {
            this.dialogRef.close();
            this.dialogRef = null;
            this.notificationBarService.create({ message: this.translate.get('COMPANY_EDIT_DONOTHING'), type: NotificationType.Success });
        }
        else {
            this.contactService.updateContact(
                this.contact.id,
                this.contact.name,
                this.contact.parentName,
                this.contact.phone,
                this.contact.email,
                this.contact.address,
                this.contact.website,
                CREDENTIAL.USER_NAME,
                CREDENTIAL.CLIENT_ID
            ).subscribe(
                response => {
                    this.dialogRef.close();
                    this.dialogRef = null;
                    this.notificationBarService.create({ message: this.translate.get('COMPANY_EDIT_SUCCESS'), type: NotificationType.Success });

                });
        }
    }

    copyFrom(ct: Contact) {
        let ret = new Contact();
        ret.id = ct.id;
        ret.name = ct.name;
        ret.job_title = ct.job_title;
        ret.parentName = ct.parentName;
        ret.phone = ct.phone;
        ret.email = ct.email;
        ret.openDeal = ct.openDeal;
        ret.wonDeal = ct.wonDeal;
        ret.lastContactTime = ct.lastContactTime;
        ret.owner = ct.owner;
        ret.address = ct.address;
        ret.website = ct.website;
        ret.createdDatetime = ct.createdDatetime;
        ret.createdBy = ct.createdBy;
        ret.updatedDatetime = ct.updatedDatetime;
        ret.updatedBy = ct.updatedBy;
        return ret;
    }
}
