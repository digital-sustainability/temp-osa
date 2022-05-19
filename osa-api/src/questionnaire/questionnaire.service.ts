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
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let convertedId = new ObjectId(id);
    let document = collection.findOne({_id: convertedId});
    return document;
  }

  async replace(id: string, replaceQuestionnaireDto: ReplaceQuestionnaireDto) {
    let convertedId = new ObjectId(id);
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    collection.replaceOne({ _id: convertedId}, replaceQuestionnaireDto);
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    let convertedId = new ObjectId(id);
    let collection = await this.mongo.getCollection(this.COLLECTIONNAME);
    let document = collection.findOne({_id: convertedId});
    for (var oldKey in document){
      for (var updateKey in updateQuestionnaireDto){
        if (oldKey == updateKey){
          document[oldKey] = updateQuestionnaireDto[updateKey]
        }
      }
    }
    collection.replaceOne({_id: convertedId}, document);
  }


  //idea: get old document
  //create new document 
  //get updated values
  //iterate over old document: for each key, check if updated value matches. push either old or updated value to new document
  //replace old document with new document

  //or
  // get old document
  //iterate over old document: for each key, check if updated value matches (nested for loop)
  // if it matches, use UpdateOne to change the key

  //or 
  //get old document
  //iterate over old document, for each key, check if updated value matches
  //if it matches, replace it in the document
  //use replaceone with old document


  /*var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
  for (var i = 0; i < arr.length; i++){
  document.write("<br><br>array index: " + i);
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    document.write("<br> - " + key + ": " + value);
  }
}*/
}
