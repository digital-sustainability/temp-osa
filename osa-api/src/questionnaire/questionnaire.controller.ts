import { Controller, Get, Post, Body, Param, Put, Patch} from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { ReplaceQuestionnaireDto } from './dto/replace-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnaireService.create(createQuestionnaireDto);
  }

  //remove this eventually
  @Get()
  findAll() {
    return this.questionnaireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionnaireService.findOne(id);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() replaceQuestionnaireDto: ReplaceQuestionnaireDto) {
    return this.questionnaireService.replace(id, replaceQuestionnaireDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return this.questionnaireService.update(id, updateQuestionnaireDto);
  }

}
