import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { EmailsService } from 'src/emails.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService, UsersService, EmailsService],
})
export class TransactionsModule {}
