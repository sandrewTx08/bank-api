import { IsInt } from 'class-validator';

export class TransactionTransferencePipe {
  @IsInt()
  to_user_id: number;

  @IsInt()
  from_user_id: number;

  @IsInt()
  amount: number;
}

export class TransactionDepositPipe {
  @IsInt()
  from_user_id: number;

  @IsInt()
  amount: number;
}
