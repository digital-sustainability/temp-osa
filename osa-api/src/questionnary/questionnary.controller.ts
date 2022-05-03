import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionnaryService } from './questionnary.service';
import { CreateQuestionnaryDto } from './dto/create-questionnary.dto';
import { UpdateQuestionnaryDto } from './dto/update-questionnary.dto';

@Controller('questionnary')
export class QuestionnaryController {
  constructor(private readonly questionnaryService: QuestionnaryService) {}

  @Post()
  create(@Body() createQuestionnaryDto: CreateQuestionnaryDto) {
    return this.questionnaryService.create(createQuestionnaryDto);
  }

  @Get()
  findAll() {
    return this.questionnaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionnaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionnaryDto: UpdateQuestionnaryDto) {
    return this.questionnaryService.update(+id, updateQuestionnaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionnaryService.remove(+id);
  }
}
