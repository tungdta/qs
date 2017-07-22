import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  template: `
        <h2 md-dialog-title>{{ title }}</h2>
        <md-dialog-content><p>{{ message }}</p></md-dialog-content>
        <md-dialog-actions>
            <button type="button" md-raised-button
              (click)="dialogRef.close(true)">{{'confirm.dialog.ok' | translate}}</button>
            <button type="button" md-button
              (click)="dialogRef.close()">{{'confirm.dialog.cancel' | translate}}</button>
        </md-dialog-actions>
    `,
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) {

  }
}
