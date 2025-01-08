import { ShardClient } from 'detritus-client';
import { getEnv } from '../utils/Util';
import { clientOptions } from '../utils/Constants';

export class Duckie extends ShardClient {
    env = getEnv();

    constructor() {
        super(getEnv().DISCORD_TOKEN, clientOptions);
    }
}
