import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class TransactionTransferencePipe {
  @IsInt()
  @Type(() => Number)
  to_user_id: number;

  @IsInt()
  @Type(() => Number)
  from_user_id: number;

  @IsInt()
  @Type(() => Number)
  amount: number;
}

export class TransactionDepositPipe {
  @IsInt()
  @Type(() => Number)
  from_user_id: number;

  @IsInt()
  @Type(() => Number)
  amount: number;
}
