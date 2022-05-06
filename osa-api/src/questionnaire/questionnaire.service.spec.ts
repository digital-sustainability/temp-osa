import { Test, TestingModule } from '@nestjs/testing';
import { MongoModule } from '../mongo/mongo.module';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;
  let mongo: MongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MongoModule],
      providers: [
        QuestionnaireService,
        { provide: MongoService, useClass: MongoService },
      ],
    }).compile();

    service = module.get<QuestionnaireService>(QuestionnaireService);
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
