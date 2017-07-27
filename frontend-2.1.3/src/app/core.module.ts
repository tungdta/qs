import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToastyService, ToastyConfig, ToastyModule } from 'ng2-toasty';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ToastyModule.forRoot()
  ],
  declarations: [],
  exports: [
    ToastyModule
  ],
  providers: [
    ToastyService,
    ToastyConfig,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
