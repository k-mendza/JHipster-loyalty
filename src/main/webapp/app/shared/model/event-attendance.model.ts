import { Moment } from 'moment';

export interface IEventAttendance {
    id?: number;
    attendanceDate?: Moment;
    eventId?: number;
    userId?: number;
}

export class EventAttendance implements IEventAttendance {
    constructor(public id?: number, public attendanceDate?: Moment, public eventId?: number, public userId?: number) {}
}
