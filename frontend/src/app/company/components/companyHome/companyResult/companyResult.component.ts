import { CompanyAdd } from './../companyAdd/companyAdd.component';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import {
    MyTranslateService,
    ContactService,
    CompanyService
} from '../../../../shared/service/';
import { CompanyEdit } from '../companyEdit/';
import { AgentQueue, Contact } from '../../../../shared/model/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { CREDENTIAL } from "../../../../shared/config/endpoint.const";

@Component({
    selector: 'company-result',
    templateUrl: './companyResult.html'
})


export class CompanyResult implements OnInit {
    dialogCloneRef: MdDialogRef<CompanyAdd>;
    dialogRef: MdDialogRef<CompanyEdit>;
    iconItems = [{
        id: 'add',
        text: 'ADD DEAL',
        icon: 'attach_money'
    },
    {
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
        private contactService: ContactService,
        private notificationBarService: NotificationBarService,
        public dialog: MdDialog,
        public dialogAdd: MdDialog,
        private translate: MyTranslateService)
    { }
    ngOnInit() {
        this.contactService.loadDataTable();
    }

    click(id: string, row: Contact) {
        if (id == "add") {
            //this.addContactDialog();
            this.notificationBarService.create({ message: 'USER CLICK ADD DEAL' + row.name, type: NotificationType.Success });
        }
        if (id == "clone") {
            this.cloneContactDialog(row);
            //this.notificationBarService.create({ message: 'USER CLICK CLONE CUSTOMER' + row.name, type: NotificationType.Success });
        }
        if (id == "edit") {
            this.openEditContactDialog(row);
            //this.notificationBarService.create({ message: 'USER CLICK EDIT CUSTOMER' + row.name, type: NotificationType.Success });
        }
        if (id == "delete") {
            this.deleteContact(row);
            //this.notificationBarService.create({ message: 'USER CLICK DELETE CUSTOMER' + row.name, type: NotificationType.Success });
        }
    }
    cloneContactDialog(row: Contact) {
        let config = new MdDialogConfig();
        config.disableClose = true;
        config.width = "600px";
        config.height = "540px";
        this.dialogCloneRef = this.dialog.open(CompanyAdd, config);
        this.dialogCloneRef.componentInstance.contact = row;

    }

    openEditContactDialog(row: Contact) {
        let config = new MdDialogConfig();
        config.disableClose = true;
        config.width = "600px";
        config.height = "540px";
        this.dialogRef = this.dialog.open(CompanyEdit, config);

        this.dialogRef.componentInstance.org_contact = row;
        //this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
    }

    deleteContact(row: Contact) {
        this.contactService.deleteContact(row.id, CREDENTIAL.CLIENT_ID).subscribe(
            response => {
                this.notificationBarService.create({ message: 'DELETE THÀNH CÔNG', type: NotificationType.Success });
            });
    }

    send(row) {

    }
}

