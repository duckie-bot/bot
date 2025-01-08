import { GatewayIntents } from 'detritus-client/lib/constants';

export const clientOptions = {};
export enum Colors {
    DEFAULT_EMBED_COLOR = 0x00819a,
}
export const CLIENT_OPTIONS = {
    gateway: {
        disabledEvents: ['TYPING_START', 'TYPING_STOP'],
        loadAllMembers: true,
        intents: [
            GatewayIntents.GUILDS,
            GatewayIntents.GUILD_MEMBERS,
            // GatewayIntents.GUILD_BANS,
            GatewayIntents.GUILD_EMOJIS,
            // GatewayIntents.GUILD_INTEGRATIONS,
            GatewayIntents.GUILD_WEBHOOKS,
            // GatewayIntents.GUILD_INVITES,
            // GatewayIntents.GUILD_VOICE_STATES,
            GatewayIntents.GUILD_PRESENCES,
            GatewayIntents.GUILD_MESSAGES,
            // GatewayIntents.GUILD_MESSAGE_REACTIONS,
            // GatewayIntents.GUILD_MESSAGE_TYPING,
            GatewayIntents.DIRECT_MESSAGES,
            // GatewayIntents.DIRECT_MESSAGE_REACTIONS,
            // GatewayIntents.DIRECT_MESSAGE_TYPING,
            GatewayIntents.MESSAGE_CONTENT,
            // GatewayIntents.GUILD_SCHEDULED_EVENTS,
            // GatewayIntents.AUTO_MODERATION_CONFIGURATION,
            // GatewayIntents.AUTO_MODERATION_EXECUTION,
            GatewayIntents.GUILD_MESSAGE_POLLS,
            // GatewayIntents.DIRECT_MESSAGE_POLLS,
        ],
        identifyProperties: {
            $browser: 'Discord iOS',
        },
    },
};
