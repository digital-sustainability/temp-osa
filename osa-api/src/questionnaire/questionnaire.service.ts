import { Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  private readonly COLLECTIONNAME = 'osa-fragebogen';

  constructor (private mongo: MongoService){  
  }

  async create(createQuestionnaireDto: CreateQuestionnaireDto): Promise<string> {
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let result = await collection.insertOne(createQuestionnaireDto);
    let id = result.insertedId.valueOf().toString();
    return id;
  }

  async findAll() {
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    return collection.find().toArray();
  }

  async findOne(id: string) {
    const document = await this.mongo.getDocument(this.COLLECTIONNAME, id);
    return document;
  }

  update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`;
  }

  remove(id: string) {
    return `This action removes a #${id} questionnaire`;
  }

}
