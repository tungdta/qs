import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
// import { ToastyService, ToastyConfig, ToastyModule } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';
import { CdkTableModule } from '@angular/cdk';
// sessionStorage
import { LocalStorageService } from 'angular-2-local-storage';


import { DndModule } from 'ng2-dnd';

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
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

import { AuthInterceptor } from './auth/AuthInterceptor';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthDisabledDirective } from './auth/authDisabled.directive';
import { AuthHideDirective } from './auth/authHide.directive';
import { ConfirmService } from './service/confirm/confirm.service';
import { ConfirmDialogComponent } from './service/confirm/confirm-dialog.component';
import { TreeModule } from 'angular-tree-component';



export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.warn(`Translation not found for key  ${params.key} in ${params.translateService.currentLang}.json`);
    return `**${params['key']}**`;
  }
}

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  imports: [
    FlexLayoutModule,
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
    // ToastyModule.forRoot(),
    DndModule.forRoot()
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
    ConfirmDialogComponent,
    AuthDisabledDirective,
    AuthHideDirective
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
    // ToastyModule,
    ConfirmDialogComponent,
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
    DndModule,
    TreeModule,
    FlexLayoutModule
    // AgentQueue
  ],
  // entryComponents: [AgentQueueDialog],
  providers: [
    MenuItems,
    AuthService,
    ConfirmService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    // MyTranslateService
    // NotificationBarService,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})

export class SharedModule {
  public static translate;
  constructor(translate: TranslateService, private sessionStorage: LocalStorageService) {
    SharedModule.translate = translate;
    translate.addLangs(['en', 'vi']);
    const currentLang: string = sessionStorage.get('currentLang') || 'en';
    translate.use(currentLang.match(/en|vi/) ? currentLang : 'en');
  }
}
