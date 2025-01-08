import EventEmitter from 'events';
import fs from 'fs';
import path from 'path';
import { EventModule } from './Event';
import { BaseCollection } from 'detritus-client/lib/collections';
import { Duckie } from '../../core/Client';

export class EventClient extends EventEmitter {
    modules: BaseCollection<string, EventModule> = new BaseCollection();

    emitters: BaseCollection<string, EventEmitter> = new BaseCollection();

    constructor(public client: Duckie) {
        super({ captureRejections: true });
    }

    setEmitter(name: string, emitter: EventEmitter) {
        if (this.emitters.has(name)) {
            throw new Error(`Emitter ${name} is already set`);
        }

        this.emitters.set(name, emitter);
    }

    async loadAll(dir: string) {
        dir = path.resolve(path.join(process.cwd(), dir));
        const files = EventClient.readdirRecursive(dir);

        for (const file of files) {
            const Module = await import(file);
            const def = Module.default;
            if (!def.default) {
                throw new Error(
                    `Module ${file} does not have a default export`,
                );
            }

            const module = new def.default(this.client);

            if (!(module.id || module.emitter || module.event || module.run)) {
                throw new Error(`Invalid Module ${file}.`);
            }

            if (this.modules.has(module.id)) {
                throw new Error(`Module ${module.id} is already loaded`);
            }
            module.client = this.client;
            Object.defineProperties(module, {
                client: { value: this.client, enumerable: false },
                handler: { value: this, enumerable: false },
            });
            this.modules.set(module.id, module);

            if (!this.emitters.has(module.emitter)) {
                throw new Error(
                    `Emitter ${module.emitter} does not exist in emitters`,
                );
            }
            this.emitters
                .get(module.emitter)
                ?.[
                    module.type as 'on'
                ](module.event, (...args) => module.run?.(...args));
        }
    }

    static readdirRecursive(directory: string) {
        const result: string[] = [];

        function read(dir: string) {
            const files = fs.readdirSync(dir);

            for (const file of files) {
                const filepath = path.join(dir, file);

                if (fs.statSync(filepath).isDirectory()) {
                    read(filepath);
                } else {
                    console.log('pushing bro');
                    result.push(filepath);
                    console.log(result.length);
                }
            }
        }
        read(directory);
        return result;
    }
}
