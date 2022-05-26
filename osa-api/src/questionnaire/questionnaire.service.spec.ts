import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId} from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;
  let mongo: MongoService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ QuestionnaireService, 
        { provide: MongoService,
          useFactory: async () => {
          let mongo = new MongoService();
          await mongo.onModuleInit();
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

});
