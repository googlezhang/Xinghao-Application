import { NgModule } from '@angular/core';

import { XinghaoApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [XinghaoApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [XinghaoApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class XinghaoApplicationSharedCommonModule {}
