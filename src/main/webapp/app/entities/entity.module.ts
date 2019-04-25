import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'location',
                loadChildren: './location/location.module#LoyaltyLocationModule'
            },
            {
                path: 'event',
                loadChildren: './event/event.module#LoyaltyEventModule'
            },
            {
                path: 'event-attendance',
                loadChildren: './event-attendance/event-attendance.module#LoyaltyEventAttendanceModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoyaltyEntityModule {}
