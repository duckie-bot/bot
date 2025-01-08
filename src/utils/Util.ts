import { CustomEnv, EventConfig } from '@duckie/typings';
import fs from 'fs';

const env = {} as CustomEnv;

export function getEnv() {
    const filedata = fs.readFileSync('./.config/.env', { encoding: 'utf-8' });
    for (const line of filedata.split('\n')) {
        if (!line.includes('=')) continue;
        const [NAME, ...data] = line.split('=');
        env[NAME as 'DISCORD_TOKEN'] = data.join('=');
    }

    if (!env.DISCORD_TOKEN) {
        throw new Error('no token provided.');
    }
    if (!env.ENV) {
        env.ENV = 'dev';
    }
    if (!env.SUPPORT_SERVER) {
        env.SUPPORT_SERVER = '<not provided>';
    }
    return env;
}

export const decorators = {
    applyOptions<Options>(options: Options) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (cls: any) => {
            return eval(
                [
                    '(cls, option) => ',
                    `class Extended${cls.name} extends cls {`,
                    'constructor(options)',
                    '{',
                    'super({ ...options, ...option })',
                    '}',
                    '}',
                ].join('\n'),
            )(cls, options);
        };
    },
    applyEventOptions(options: EventConfig) {
        return this.applyOptions(options);
    },
};
