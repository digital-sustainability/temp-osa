import { Test, TestingModule } from '@nestjs/testing';
import { SeedService } from './seed.service';
import { MongoService} from '../mongo/mongo.service'

describe('SeedService', () => {
  let service: SeedService;
  let mongo: MongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedService, 
        {
          provide: MongoService,
          useFactory: async () => {
            const mongo = new MongoService();
            await mongo.onModuleInit();
            return mongo;
          },
        },
      ],
    }).compile();
    service = module.get<SeedService>(SeedService);
    mongo = await module.resolve<MongoService>(MongoService);
  });

  afterEach(async() => {
      await mongo.onModuleDestroy();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('db should be defined', () => {
    expect(mongo).toBeDefined();
  });

  it ('should create questionnaire collection on ApplicationBootstrap', async () => {
    const COLLECTIONNAME = 'osa-fragebogen'
    const spy = jest.spyOn (mongo, 'createCollection');
    await service.onApplicationBootstrap();
    expect (spy).toBeCalledTimes(1);
    const collection = await mongo.getCollection(COLLECTIONNAME);
    expect (await collection.countDocuments()).toBe(4)
  }
  )
});
