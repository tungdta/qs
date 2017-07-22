import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MyTranslateService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');

    const browserLang: string = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');

  }
  get(key: string, params?: object): string {
    let ret: string;
    this.translate.get(key, params).subscribe((r: string) => {
      ret = r;
    }, error => ret = key);
    return ret;
  }
}
