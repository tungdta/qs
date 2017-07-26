
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return params.translateService.currentLoader.getTranslation(params.translateService.currentLang)
      .map(r => {
        const trad = r[params.key];
        if (trad) {
          return trad;
        } else {
          const prefix = (<any>params.translateService.currentLoader).prefix;
          console.warn(`translation not found for key ${prefix} ${params.key} in ${params.translateService.currentLang}`);
          return `**${params.key}**`;
        }
      });
  }
}
