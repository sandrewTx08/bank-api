import { Type } from 'class-transformer';
import { IsInt, Max } from 'class-validator';

export class TransactionTransferPipe {
  @IsInt()
  @Type(() => Number)
  to_account_id: number;

  @IsInt()
  @Type(() => Number)
  from_account_id: number;

  @IsInt()
  @Type(() => Number)
  amount: number;
}

export class TransactionDepositPipe {
  @IsInt()
  @Type(() => Number)
  from_account_id: number;

  @IsInt()
  @Max(2000)
  @Type(() => Number)
  amount: number;
}

export class TransactionBuyPipe {
  @IsInt()
  @Type(() => Number)
  from_account_id: number;

  @IsInt()
  @Type(() => Number)
  product_id: number;

  @IsInt()
  @Type(() => Number)
  quantity: number;
}
