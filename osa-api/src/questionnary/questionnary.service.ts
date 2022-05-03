import { Injectable } from '@nestjs/common';
import { CreateQuestionnaryDto } from './dto/create-questionnary.dto';
import { UpdateQuestionnaryDto } from './dto/update-questionnary.dto';

@Injectable()
export class QuestionnaryService {
  create(createQuestionnaryDto: CreateQuestionnaryDto) {
    return 'This action adds a new questionnary';
  }

  findAll() {
    return `This action returns all questionnary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionnary`;
  }

  update(id: number, updateQuestionnaryDto: UpdateQuestionnaryDto) {
    return `This action updates a #${id} questionnary`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionnary`;
  }
}
