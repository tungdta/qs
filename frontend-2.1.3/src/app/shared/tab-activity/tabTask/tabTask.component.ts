import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {
    MyTranslateService, TaskService
} from '../../service/';
import { NotificationType, NotificationBarService } from 'angular2-notification-bar'
import { Contact } from '../../model/';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../model/task';

@Component({
    selector: 'tab-task',
    templateUrl: './tabTask.html'
})

export class TabTask implements OnInit {
    @Input() relatedType: string;
    @Input() relatedDataId: string;

    company_id: string;
    tasklist: Task[];

    constructor(
        private taskService: TaskService,
        private translate: MyTranslateService,
        private notificationBarService: NotificationBarService
    ) { }
    ngOnInit() {
        this.taskService.loadData();
    }

    update(task: Task) {
        this.notificationBarService.create({ message: 'Cần update database task status:' + task.status, type: NotificationType.Success });
    }
}
