import { Duckie } from './core/Client';

const client = new Duckie();

client.run({ wait: true }).catch((error) => {
    console.error('failed to run the bot. reason: ', error);
    // close all connections.
    process.exit(1);
});
