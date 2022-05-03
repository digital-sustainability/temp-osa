import { Test, TestingModule } from '@nestjs/testing';
import { Collection } from 'mongodb';
import { MongoService } from './mongo.service';

describe('MongoService', () => {
  let service: MongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoService],
    }).compile();

    service = module.get<MongoService>(MongoService);
    await service.onModuleInit();
  });

  afterEach(async () => {
    await service.onModuleDestroy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('should have a connection to mongodb', async ()=>{
    let db = service.getMongoDb();
    expect ((await db.stats()).ok).toBe(1);
  });



  describe('should insert new document in collection', () => {
    const COLLECTIONNAME = 'test';
    let collection: Collection;
    beforeEach(async () => {
      collection = await service.createCollection(COLLECTIONNAME);
    });
    afterEach(async () => {
      const db = service.getMongoDb();
      await db.dropCollection(COLLECTIONNAME);
    });
    it ('should insert new document into the db', async () =>{
      const document = {title: 'title'};
      expect(await collection.countDocuments()).toBe(0);
      await collection.insertOne (document);
      expect(await collection.countDocuments()).toBe(1);
    });
    it ('should name inserted document correctly', async () =>{
      const document = {id: 25, title: 'test'};
      await collection.insertOne (document);
      expect(await (await collection.findOne({id: 25})).title).toBe("test");
    });
  });
});
