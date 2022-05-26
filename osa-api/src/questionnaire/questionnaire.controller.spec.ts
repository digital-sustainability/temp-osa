import { Test, TestingModule } from '@nestjs/testing';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireController } from './questionnaire.controller';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireController', () => {
  let controller: QuestionnaireController;
  let mongo: MongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionnaireController],
      providers: [ QuestionnaireService, 
        { provide: MongoService,
          useFactory: async () => {
          let mongo = new MongoService();
          mongo.onModuleInit();
          return mongo;
        },
      },
      ],
    }).compile();
    controller = module.get<QuestionnaireController>(QuestionnaireController);
    mongo = await module.resolve<MongoService>(MongoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  

});
