import { ClientEvents } from 'detritus-client/lib/constants';
import { EventModule } from '../../../handlers/events/Event';
import { decorators } from '../../../utils/Util';
@decorators.applyEventOptions({
    emitter: 'client',
    event: ClientEvents.GATEWAY_READY,
    id: 'client.internal.raw',
    type: 'on',
})
export default class ReadyEvent extends EventModule {
    async run() {
        if (
            this.client.env.ENV === 'beta' ||
            Reflect.get(this.client.env, 'debug') === 'true'
        ) {
            console.log('client ready.');
        }
    }
}
