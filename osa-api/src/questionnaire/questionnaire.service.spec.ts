import { Test, TestingModule } from '@nestjs/testing';
import { Collection, ObjectId } from 'mongodb';
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
        { provide: MongoService, useClass: MongoService }, MongoService
      ]
    }).compile();

    service = module.get<QuestionnaireService>(QuestionnaireService);
    mongo = module.get<MongoService>(MongoService);
    await mongo.onModuleInit();
    const COLLECTIONNAME = "osa-fragebogen";
    let collection: Collection;
    collection = await mongo.createCollection(COLLECTIONNAME);
  });

  afterEach(async () => {
    await mongo.onModuleDestroy();
  });
  

  it('should be defined', () => {
    expect(service).toBeDefined();
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
