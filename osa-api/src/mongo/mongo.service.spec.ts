import { Test, TestingModule } from '@nestjs/testing';
import { Collection, ObjectId } from 'mongodb';
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

  it ('should create new collection on a new server', async() =>{
    const db = service.getMongoDb();
    const stats = await db.stats();
    expect (stats.collections).toBe(0);
    const spy = jest.spyOn(db, 'createCollection');
    const collection = await service.createCollection('test');
    expect (spy).toBeCalledTimes(1);
    expect(await collection.countDocuments()).toBe(0);
    const newStats = await db.stats();
    expect (newStats.collections).toBe(1);
  });

 
  describe('should insert new document correctly', () => {
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
    it ('should count documents correctly', async () =>{
      const document = {title : "document1"};
      const document2 = {title: "document2"};
      expect(await collection.countDocuments()).toBe(0);
      await collection.insertOne (document);
      expect(await collection.countDocuments()).toBe(1);
      await collection.insertOne (document2)
      expect(await collection.countDocuments()).toBe(2);
    });
  });

  it ('should find document by ObjectId', async () => {
    const COLLECTIONNAME = 'test';
    let collection: Collection;
    collection = await service.createCollection(COLLECTIONNAME);
    const document1 = {title: "document1", _id: new ObjectId("507f1f77bcf86cd799439011")};
    const document2 = {title: "document2"};
    const document3= {title: "document3"};
    await collection.insertOne (document1);
    await collection.insertOne (document2);
    await collection.insertOne (document3);
    const testDocument = await service.getDocument('test', "507f1f77bcf86cd799439011");
    expect(testDocument.title).toBe("document1");
  }
  )
});
