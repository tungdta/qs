import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { CompanyService, MyTranslateService } from '../../../shared/service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../../shared/model/';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'companyHome',
    templateUrl: './companyHome.html'
})

export class CompanyHome implements OnInit {

    company_id: string;

    constructor(
        private translate: MyTranslateService,

    ) { }
    ngOnInit() {
        
    }
}