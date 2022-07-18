import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Prisma } from '@prisma/client';
import {
  TransactionDepositPipe,
  TransactionTransferPipe,
} from './transactions.pipe';
import { TransactionsEmailNotification } from './transactions.intercerptor';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Put('/deposit')
  @UseInterceptors(TransactionsEmailNotification)
  deposit(@Body() body: TransactionDepositPipe) {
    return this.transactionsService.deposit(body.from_user_id, body.amount);
  }

  @Put('/transfer')
  @UseInterceptors(TransactionsEmailNotification)
  transfer(@Body() body: TransactionTransferPipe) {
    return this.transactionsService.transfer(
      body.from_user_id,
      body.to_user_id,
      body.amount,
    );
  }

  @Post()
  create(@Body() createTransactionDto: Prisma.TransactionsCreateInput) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transactionsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: Prisma.TransactionsUpdateInput,
  ) {
    return this.transactionsService.update({ id: +id }, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove({ id: +id });
  }
}
