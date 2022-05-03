import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionnaryDto } from './create-questionnary.dto';

export class UpdateQuestionnaryDto extends PartialType(CreateQuestionnaryDto) {}
