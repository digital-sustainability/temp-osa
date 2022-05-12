import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  create(createQuestionnaireDto: CreateQuestionnaireDto) {
    return 'This action adds a new questionnaire';
  }

  findAll() {
    return `This action returns all questionnaire`;
  }

  findOne(id: string) {
    return `This action returns a #${id} questionnaire`;
  }

  update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`;
  }

  remove(id: string) {
    return `This action removes a #${id} questionnaire`;
  }



}
