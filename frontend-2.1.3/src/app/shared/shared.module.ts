import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastyModule} from 'ng2-toasty';
import {CdkTableModule} from '@angular/cdk';

import {
  MaterialModule,
  MdInputModule,
  MdNativeDateModule,
  MdSelectionModule,
  MdDialogModule,
  MdCardModule,
  MdIconModule,
  MdRadioModule,
  MdButtonModule,
  MdProgressBarModule,
  MdToolbarModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdExpansionModule,
  MdGridListModule,
  MdListModule,
  MdMenuModule,
  MdProgressSpinnerModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdTooltipModule,
} from '@angular/material';
import { NotificationBarModule } from 'angular2-notification-bar'

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { PageBreadcrumbComponent } from './page-breadcrumb/';
import { BreadcrumbComponent } from './breadcrumb/';
import { TabTask } from './tab-activity/tabTask/';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

import { AuthInterceptor } from './auth/AuthInterceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ConfirmService } from './service/confirm/confirm.service';
import { ConfirmDialogComponent }   from './service/confirm/confirm-dialog.component';

// import {MyTranslateService} from './service/mytranslate.service';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log('Thiếu giá trị i18n: ' + params['key']);
    return params['key'];
  }
}

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

@NgModule({
  imports: [
    MaterialModule,
    MdNativeDateModule,
    MdSelectionModule,
    MdDialogModule,
    MdCardModule,
    MdIconModule,
    MdRadioModule,
    MdButtonModule,
    MdProgressBarModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdExpansionModule,
    MdGridListModule,
    MdListModule,
    MdMenuModule,
    MdProgressSpinnerModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdTooltipModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MdInputModule,
    NotificationBarModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'sessionStorage'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler }
    }),
    ToastyModule.forRoot()
    // AgentQueue
    // ,MdButton
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    PageBreadcrumbComponent,
    BreadcrumbComponent,
    TabTask,
    ConfirmDialogComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
    PageBreadcrumbComponent,
    BreadcrumbComponent,
    TabTask,
    LocalStorageModule,
    TranslateModule,
    ToastyModule,
    ConfirmDialogComponent
    // AgentQueue
  ],
  // entryComponents: [AgentQueueDialog],
  providers: [
    MenuItems,
    AuthService,
    ConfirmService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // MyTranslateService
    // NotificationBarService,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
