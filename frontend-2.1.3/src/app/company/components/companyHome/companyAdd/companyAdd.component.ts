import { CREDENTIAL } from './../../../../shared/config/endpoint.const';
import { Contact } from './../../../../shared/model/contact';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Observable } from 'rxjs/Observable';

import { ContactService, MyTranslateService } from '../../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'

@Component({
    selector: 'company-add',
    templateUrl: './companyAdd.html'
})

export class CompanyAdd implements OnInit {
    public form: FormGroup;
    filteredAgent: Observable<string[]>;
    contact: Contact = new Contact();

    constructor(
        private fb: FormBuilder,
        public dialogRef: MdDialogRef<CompanyAdd>,
        private contactService: ContactService,
        private notificationBarService: NotificationBarService,
        public translate: MyTranslateService
    ) { }
    ngOnInit() {
        this.form = this.fb.group({
            name_control: [null, Validators.compose([Validators.required])],
            phone_control: [null],
            email_control: [null],
            parent_org_control: [null],
            address_control: [null],
            website_control: [null],
        });
    }

    closeDialog() {
        this.dialogRef.close();
        this.dialogRef = null;
    }

    onSubmit(event) {
        // let ret = this.contactService.addContact(this.name, this.phone, this.emaill, this.parent_org, this.address, this.website);
        this.contactService.addContact(
            this.contact.name,
            this.contact.phone,
            this.contact.email,
            this.contact.parentName, // Cần xử lý bóc string, ID chỗ này
            this.contact.address,
            this.contact.website,
            CREDENTIAL.USER_NAME,
            CREDENTIAL.CLIENT_ID).subscribe(
            response => {
                this.dialogRef.close();
                this.dialogRef = null;
                this.notificationBarService.create({ message: 'ADD THÀNH CÔNG', type: NotificationType.Success });
            });
    }
}
