import { NgModule } from '@angular/core';

import { LoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LoyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LoyaltySharedCommonModule {}
