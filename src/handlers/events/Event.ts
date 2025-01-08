import { EventConfig } from '@duckie/typings';
import { Duckie } from '../../core/Client';

export class EventModule {
    id: string;
    event: string;
    emitter: string;
    type: 'on' | 'once';
    client!: Duckie;
    constructor(config: EventConfig) {
        this.id = config.id;
        this.event = config.event;
        this.emitter = config.emitter;
        this.type = config.type;
    }

    run?(...args: unknown[]): void;
}
