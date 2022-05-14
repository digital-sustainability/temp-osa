import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy{

    private mongoMemoryServer?: MongoMemoryServer;
    private connection: MongoClient;
    private db: Db;

    public createCollection (name: string): Promise<Collection> {
        return this.db.createCollection(name);
    }

    public getCollection (name: string){
        return this.db.collection(name);
    }

    public getMongoDb(){
        return this.db;
    }
    
    async onModuleInit() {
    Logger.debug('Server is being initialized');
    this.mongoMemoryServer = await MongoMemoryServer.create();
    this.connection = await MongoClient.connect(
        this.mongoMemoryServer.getUri(),
    );
    this.db = await this.connection.db();
    Logger.debug('Server was successfully initialized');    
    }

    async onModuleDestroy() {
    Logger.debug('Server and Mongo connection are being destroyed');
    if (this.connection) await this.connection.close();
    if (this.mongoMemoryServer) await this.mongoMemoryServer.stop();
    Logger.debug("Mongo Server and Connections were destroyed")
    }
}
