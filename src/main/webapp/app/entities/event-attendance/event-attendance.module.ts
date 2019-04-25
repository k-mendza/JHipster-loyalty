import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyaltySharedModule } from 'app/shared';
import {
    EventAttendanceComponent,
    EventAttendanceDetailComponent,
    EventAttendanceUpdateComponent,
    EventAttendanceDeletePopupComponent,
    EventAttendanceDeleteDialogComponent,
    eventAttendanceRoute,
    eventAttendancePopupRoute
} from './';

const ENTITY_STATES = [...eventAttendanceRoute, ...eventAttendancePopupRoute];

@NgModule({
    imports: [LoyaltySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EventAttendanceComponent,
        EventAttendanceDetailComponent,
        EventAttendanceUpdateComponent,
        EventAttendanceDeleteDialogComponent,
        EventAttendanceDeletePopupComponent
    ],
    entryComponents: [
        EventAttendanceComponent,
        EventAttendanceUpdateComponent,
        EventAttendanceDeleteDialogComponent,
        EventAttendanceDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoyaltyEventAttendanceModule {}
