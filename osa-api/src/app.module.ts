import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionnaryModule } from './questionnary/questionnary.module';

@Module({
  imports: [QuestionnaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
