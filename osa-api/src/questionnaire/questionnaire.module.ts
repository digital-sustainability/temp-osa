import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { MongoModule } from '../mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService]
})
export class QuestionnaireModule {}
