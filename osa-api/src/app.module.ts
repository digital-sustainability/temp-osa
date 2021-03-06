import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { SeedModule } from './seed/seed.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [QuestionnaireModule, SeedModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
