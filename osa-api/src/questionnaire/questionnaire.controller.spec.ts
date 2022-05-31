import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { QuestionnaireController } from './questionnaire.controller';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireController', () => {
  let controller: QuestionnaireController;
  let mongo: MongoService;
  let service : QuestionnaireService;
  const COLLECTIONNAME = "osa-fragebogen"

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionnaireController],
      providers: [ QuestionnaireService, MongoService
      ],
    }).compile();
    controller = module.get<QuestionnaireController>(QuestionnaireController);
    mongo = module.get<MongoService>(MongoService);
    service = module.get<QuestionnaireService>(QuestionnaireService);
    await mongo.onModuleInit();
    await mongo.createCollection(COLLECTIONNAME);
  });

  describe ('should be defined', () => {
    it('controller should be defined', () => {
      expect(service).toBeDefined();
    });
  
    it('mongo should be defined', () => {
      expect(mongo).toBeUndefined;
    });
    });


  describe ('controller should call questionnaireService', () => {
    it ('findOne should call questionnaireService findOne', async () => {
      const spy = jest.spyOn (service, 'findOne');
      await controller.findOne("507f1f77bcf86cd799439011");
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it ('create should call questionnaireService create', async () => {
      const spy = jest.spyOn (service, 'create');
      await controller.create({});
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it ('update should call questionnaireService update', async () => {
      let collection = mongo.getCollection(COLLECTIONNAME);
      let id = new ObjectId("507f1f77bcf86cd799439011");
      collection.insertOne({_id: id});
      const spy = jest.spyOn (service, 'update');
      await controller.update("507f1f77bcf86cd799439011",{"age": 23} );
      expect(spy).toHaveBeenCalledTimes(1);
    });
    });

    afterEach(async () =>{
      await mongo.onModuleDestroy();
    })

});
