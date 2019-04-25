import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { IEventAttendance } from 'app/shared/model/event-attendance.model';
import { EventAttendanceService } from './event-attendance.service';
import { IEvent } from 'app/shared/model/event.model';
import { EventService } from 'app/entities/event';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-event-attendance-update',
    templateUrl: './event-attendance-update.component.html'
})
export class EventAttendanceUpdateComponent implements OnInit {
    eventAttendance: IEventAttendance;
    isSaving: boolean;

    events: IEvent[];

    users: IUser[];
    attendanceDateDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected eventAttendanceService: EventAttendanceService,
        protected eventService: EventService,
        protected userService: UserService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ eventAttendance }) => {
            this.eventAttendance = eventAttendance;
        });
        this.eventService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IEvent[]>) => mayBeOk.ok),
                map((response: HttpResponse<IEvent[]>) => response.body)
            )
            .subscribe((res: IEvent[]) => (this.events = res), (res: HttpErrorResponse) => this.onError(res.message));
        this.userService
            .query()
            .pipe(
                filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
                map((response: HttpResponse<IUser[]>) => response.body)
            )
            .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.eventAttendance.id !== undefined) {
            this.subscribeToSaveResponse(this.eventAttendanceService.update(this.eventAttendance));
        } else {
            this.subscribeToSaveResponse(this.eventAttendanceService.create(this.eventAttendance));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEventAttendance>>) {
        result.subscribe((res: HttpResponse<IEventAttendance>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackEventById(index: number, item: IEvent) {
        return item.id;
    }

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
