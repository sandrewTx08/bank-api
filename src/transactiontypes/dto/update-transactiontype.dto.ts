import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactiontypeDto } from './create-transactiontype.dto';

export class UpdateTransactiontypeDto extends PartialType(CreateTransactiontypeDto) {}
