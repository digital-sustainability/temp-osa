import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId} from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;
  let mongo: MongoService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: MongoService,
          useFactory: async () => {
          const mongo = new MongoService();
          await mongo.onModuleInit();
          const COLLECTIONNAME = "osa-fragebogen";
          await mongo.createCollection(COLLECTIONNAME);
          const document1 = {title: "document1", _id: new ObjectId("507f1f77bcf86cd799439011")};
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
  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('mongo should be defined', () => {
    expect(mongo).toBeDefined();
  });

  it ('service should call mongoService getCollection', async() =>{
    const spy = jest.spyOn (mongo, 'getCollection');
    await service.findAll();
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it ('service should call mongoService getDocument', async() =>{
    const spy = jest.spyOn (mongo, 'getDocument');
    await service.findOne("507f191e810c19729de860ea");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
