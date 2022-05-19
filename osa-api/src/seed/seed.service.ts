import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { SEED, userData } from './seed';
import {MongoService} from '../mongo/mongo.service'

@Injectable()
export class SeedService implements OnApplicationBootstrap {
    private readonly COLLECTIONNAME = 'osa-fragebogen';
    constructor (private mongo: MongoService){}

    async onApplicationBootstrap() {
        Logger.debug('Starting App with seeding');
        await this.seedDatabase();
    }

    private async seedDatabase(){
        Logger.debug ('Seeding is proceeding');
        const collection = await this.mongo.createCollection(this.COLLECTIONNAME);
        await collection.insertMany(this.getSeedData())
    }

    private getSeedData(): userData[] { 
        return SEED.fragebogen;
    }
}
