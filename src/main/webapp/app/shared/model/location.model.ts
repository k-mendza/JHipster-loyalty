import { IEvent } from 'app/shared/model/event.model';

export interface ILocation {
    id?: number;
    name?: string;
    runDay?: number;
    events?: IEvent[];
}

export class Location implements ILocation {
    constructor(public id?: number, public name?: string, public runDay?: number, public events?: IEvent[]) {}
}
