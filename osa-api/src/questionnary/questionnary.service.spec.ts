import { Test, TestingModule } from '@nestjs/testing';
import { MongoModule } from '../mongo/mongo.module';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaryService } from './questionnary.service';

describe('QuestionnaryService', () => {
  let service: QuestionnaryService;
  let mongo: MongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongoModule],
      providers: [
        QuestionnaryService,
        { provide: MongoService, useClass: MongoService },
      ],
    }).compile();

    service = module.get<QuestionnaryService>(QuestionnaryService);
    mongo = module.get<MongoService>(MongoService)
  });
  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('service should call mongoService getCollection', async() =>{
    const spy = jest.spyOn (mongo, 'getCollection');
    await service.findAll();
    expect(spy).toHaveBeenCalledTimes(1);
  });





});
