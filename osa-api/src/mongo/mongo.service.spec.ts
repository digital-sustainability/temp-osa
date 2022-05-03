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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('should have a connection to mongodb', async ()=>{
    let db = service.getMongoDb();
    expect ((await db.stats()).ok).toBe(1);
  });



   describe ('should insert new document into the collection', () =>{
    let collection: Collection;
    let collectionName = 'name';
    beforeEach (async () => {
      collection = await service.createCollection(collectionName);
    });
    afterEach (async () => {
      let db = service.getMongoDb();
      await db.dropCollection(collectionName);
    })
    it ('should insert new document into the db', async () =>{
      let document = {title: 'title'};
      expect(await collection.countDocuments()).toBe(0);
      await collection.insertOne (document);
      expect(await collection.countDocuments()).toBe(1);
    });
    it ('should name inserted document correctly', async () =>{
      let document = {id: 25, title: 'test'};
      await collection.insertOne (document);
      expect(await (await collection.findOne({id: 25})).id).toBe("test");
    });
  });
});
