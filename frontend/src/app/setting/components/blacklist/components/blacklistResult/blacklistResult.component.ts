import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { BlackListService, MyTranslateService } from '../../../../../shared/service/';
import { BlackListSearchModel } from '../../../../../shared/model/blackListSearchModel';

@Component({
    selector: 'blacklist-result',
    templateUrl: './blacklistResult.html'
})

export class BlackListResult implements OnInit {
    searchBlackList: BlackListSearchModel = new BlackListSearchModel();
    constructor(
        private blacklistService: BlackListService,
        private translate: MyTranslateService
    ){ }

    ngOnInit() {
        this.blacklistService.loadDataBlackListTable(this.searchBlackList);
    }
}