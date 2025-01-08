import { ClientEvents } from 'detritus-client/lib/constants';
import { GatewayClientEvents } from 'detritus-client';
import { EventModule } from '../../../handlers/events/Event';
import { decorators } from '../../../utils/Util';
@decorators.applyEventOptions({
    emitter: 'client',
    event: ClientEvents.RAW,
    id: 'client.internal.raw',
    type: 'on',
})
export default class ReadyEvent extends EventModule {
    async run(event: GatewayClientEvents.Raw) {
        if (
            this.client.env.ENV === 'beta' ||
            Reflect.get(this.client.env, 'debug') === 'true'
        ) {
            console.log('received raw event', event);
        }
    }
}
