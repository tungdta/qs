import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Injectable()
export class ConfirmService {

  toastOptions: ToastOptions = {
    title: '',
    msg: '',
    showClose: true,
    timeout: 3000,
    theme: 'default'
  };

  constructor(
    private translate: TranslateService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private dialog: MdDialog) {
    toastyConfig.position = 'bottom-right';
  };

  success(msg: string, params?: object): void {
    console.log('click');
    this.translate.get(msg, params).subscribe(
      (res: string) => this.toastOptions.msg = res,
      error => this.toastOptions.msg = msg
    );
    this.toastyService.success(this.toastOptions);
  }

  error(msg: string, params?: object): void {
    this.translate.get(msg, params).subscribe(
      (res: string) => this.toastOptions.msg = res,
      error => this.toastOptions.msg = msg
    );
    this.toastyService.error(this.toastOptions);
  }

  info(msg: string, params?: object): void {
    this.translate.get(msg, params).subscribe(
      (res: string) => this.toastOptions.msg = res,
      error => this.toastOptions.msg = msg
    );
    this.toastyService.info(this.toastOptions);
  }

  warning(msg: string, params?: object): void {
    this.translate.get(msg, params).subscribe(
      (res: string) => this.toastOptions.msg = res,
      error => this.toastOptions.msg = msg
    );
    this.toastyService.warning(this.toastOptions);
  }

  defaultCancel(): void {
    this.info('action.cancel');
  }

  confirm(msg: string, okCallback: Function, cancelCallback?: Function, params?: object): void {
    let title: string;
    this.translate.get('title.comfirm').subscribe(
      (res: string) => title = res,
      error => title = 'title.comfirm'
    );
    this.translate.get(msg, params).subscribe(
      (res: string) => msg = res
    );
    let dialogRef: MdDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '40%',
      position: {
        top: '5%'
      }
    });

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = msg;

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        okCallback()
      } else {
        cancelCallback ? cancelCallback() : this.defaultCancel();
      }
    })

  }

}
