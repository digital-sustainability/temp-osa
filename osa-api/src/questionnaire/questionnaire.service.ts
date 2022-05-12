import { Injectable } from '@nestjs/common';
import { MongoService } from '../mongo/mongo.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  private readonly CollectionName = 'osa-fragebogen';
  constructor (private mongo: MongoService){}
  create(createQuestionnaireDto: CreateQuestionnaireDto) {
    return 'This action adds a new questionnaire';
  }

  async findAll() {
    const collection = await this.mongo.getCollection(this.CollectionName);
    return collection.find().toArray();
  }

  async findOne(id: string) {
    const document = await this.mongo.getDocument(this.CollectionName, id);
    return document;
  }

  update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`;
  }

  remove(id: string) {
    return `This action removes a #${id} questionnaire`;
  }

}
