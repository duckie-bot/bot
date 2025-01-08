declare module '@duckie/typings' {
    export interface CustomEnv {
        /**
         * the token to let the bot connect to Discord
         * @required
         */
        DISCORD_TOKEN: string;

        CLIENT_ID: string;

        CLIENT_SECRET: string;
        /**
         * the current developer environment.
         * @default 'dev'
         */
        ENV: 'dev' | 'prod' | 'beta';

        /**
         * the support server for the bot.
         *
         */
        SUPPORT_SERVER: string;
    }

    export interface EventConfig {
        id: string;
        event: string;
        emitter: string;
        type: 'on' | 'once';
    }
}
