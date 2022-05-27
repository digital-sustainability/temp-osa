import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  private readonly COLLECTIONNAME = 'osa-fragebogen';

  constructor(private mongo: MongoService) {}

  async create(createQuestionnaireDto: CreateQuestionnaireDto): Promise<any> {
    const collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    const result = await collection.insertOne(createQuestionnaireDto);
    const id = result.insertedId.valueOf().toString();
    return { userId: id };
  }

  async findAll() {
    const collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    return collection.find().toArray();
  }

  async findOne(id: string) {
    const collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    const convertedId = new ObjectId(id);
    const document = collection.findOne({ _id: convertedId });
    return document;
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    const convertedId = new ObjectId(id);
    const collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    const doc = await collection.findOne({ _id: convertedId });
    for (const updateKey in updateQuestionnaireDto) {
      doc[updateKey] = updateQuestionnaireDto[updateKey];
    }
    return await collection.replaceOne({ _id: convertedId }, doc);
  }
}
