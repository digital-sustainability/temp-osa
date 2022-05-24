import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { MongoService } from '../mongo/mongo.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { ReplaceQuestionnaireDto } from './dto/replace-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireService {
  private readonly COLLECTIONNAME = 'osa-fragebogen';

  constructor (private mongo: MongoService){  
  }

  async create(createQuestionnaireDto: CreateQuestionnaireDto): Promise<any> {
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let result = await collection.insertOne(createQuestionnaireDto);
    let id = result.insertedId.valueOf().toString();
    return {"userId": id};
  }

  async findAll() {
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    return collection.find().toArray();
  }

  async findOne(id: string) {
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let convertedId = new ObjectId(id);
    let document = collection.findOne({_id: convertedId});
    return document;
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    let convertedId = new ObjectId(id);
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let doc = await collection.findOne({_id: convertedId});
    for (var updateKey in updateQuestionnaireDto){
          doc[updateKey] = updateQuestionnaireDto[updateKey];
    }
    collection.replaceOne({_id: convertedId}, doc);
  }
  
}
