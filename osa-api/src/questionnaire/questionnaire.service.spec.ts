import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId} from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;
  let mongo: MongoService;
  const COLLECTIONNAME = "osa-fragebogen";
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ QuestionnaireService, 
        { provide: MongoService,
          useFactory: async () => {
          let mongo = new MongoService();
          await mongo.onModuleInit();
          await mongo.createCollection(COLLECTIONNAME);
          return mongo;
        },
      },
      ],
    }).compile();

    service = module.get<QuestionnaireService>(QuestionnaireService);
    mongo = await module.resolve<MongoService>(MongoService);
  });

  afterEach(async () => {
    await mongo.onModuleDestroy();
  });
  
  describe ('should be defined', () => {
  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('mongo should be defined', () => {
    expect(mongo).toBeUndefined;
  });
  })

  describe ('service should call mongoService getCollection', () => {
  it ('findOne should call mongoService getCollection', async () => {
    const spy = jest.spyOn (mongo, 'getCollection');
    await service.findOne("507f1f77bcf86cd799439011");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it ('create should call mongoService getCollection', async () => {
    const spy = jest.spyOn (mongo, 'getCollection');
    await service.create({});
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it ('update should call mongoService getCollection', async () => {
    let collection = mongo.getCollection(COLLECTIONNAME);
    let id = new ObjectId("507f1f77bcf86cd799439011");
    collection.insertOne({_id: id});
    const spy = jest.spyOn (mongo, 'getCollection');
    await service.update("507f1f77bcf86cd799439011",{"age": 23});
    expect(spy).toHaveBeenCalledTimes(1);
  });
  })
});
