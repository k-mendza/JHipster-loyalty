import { Moment } from 'moment';
import { IEventAttendance } from 'app/shared/model/event-attendance.model';

export interface IEvent {
    id?: number;
    date?: Moment;
    code?: string;
    locationId?: number;
    eventAttendances?: IEventAttendance[];
}

export class Event implements IEvent {
    constructor(
        public id?: number,
        public date?: Moment,
        public code?: string,
        public locationId?: number,
        public eventAttendances?: IEventAttendance[]
    ) {}
}
