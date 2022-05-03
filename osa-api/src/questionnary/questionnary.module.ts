import { Module } from '@nestjs/common';
import { QuestionnaryService } from './questionnary.service';
import { QuestionnaryController } from './questionnary.controller';

@Module({
  controllers: [QuestionnaryController],
  providers: [QuestionnaryService]
})
export class QuestionnaryModule {}
