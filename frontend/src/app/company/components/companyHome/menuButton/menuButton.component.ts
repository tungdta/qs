import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { AgentQueueService, AgentListService, QueueListService, MyTranslateService } from '../../../../shared/service/';
import { CompanyAdd } from '../companyAdd/';
import { AgentQueue } from '../../../../shared/model/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'


@Component({
  selector: 'company-menu-button',
  templateUrl: './menuButton.html'
})

export class MenuButton implements OnInit {
  dialogRef: MdDialogRef<CompanyAdd>;

  iconItems = [{
    id: 'add',
    text: 'NEW COMPANY',
    icon: 'add'
  }, {
    id: 'import',
    text: 'IMPORT LIST',
    icon: 'file_upload'
  }
  ];

  constructor(
    public dialog: MdDialog,
    private translate: MyTranslateService
  ) {
  }

  ngOnInit() {

  }

  select(id: string) {
    if (id == "add") {
      let config = new MdDialogConfig();
      config.disableClose = true;
      config.width = "600px";
      config.height = "480px";
      this.dialogRef = this.dialog.open(CompanyAdd, config);

    }
    if (id == "import") {
      console.log("Import");
    }
  }

  detail(row) {


    //this.notificationBarService.create({ message: 'USER_SAVED', type: NotificationType.Success});
  }

}
