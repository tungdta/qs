import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MyTranslateService, BlackListService } from '../../../../../shared/service/';
import { BlackListSearchModel } from '../../../../../shared/model/blackListSearchModel';

@Component({
    selector: 'blacklist-search',
    templateUrl: './blacklistSearch.html'
})
export class BlackListSearch implements OnInit {
    searchBlackList: BlackListSearchModel = new BlackListSearchModel();
    constructor(
        private translate: MyTranslateService,
        private blacklistService: BlackListService
    ) {

    }
    ngOnInit() {
    }

    filterTable() {
        this.blacklistService.loadDataBlackListTable(this.searchBlackList);
    }

    types = [{
        value: '0',
        viewValue: this.translate.get("TYPE_BLACK_LIST0")
    }, {
        value: '1',
        viewValue: this.translate.get("TYPE_BLACK_LIST1")
    }, {
        value: '2',
        viewValue: this.translate.get("TYPE_BLACK_LIST2")
    }];
}