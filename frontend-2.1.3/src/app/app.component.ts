import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// sessionStorage
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <router-outlet> </router-outlet>
  <ng2-toasty></ng2-toasty>
  `
})
export class AppComponent {
  constructor(translate: TranslateService, sessionStorage: LocalStorageService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('vi');
    const currentLang: string = sessionStorage.get('currentLang') || 'vi';
    translate.use(currentLang.match(/en|vi/) ? currentLang : 'vi');
  }
}
