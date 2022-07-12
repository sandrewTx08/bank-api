import { Module } from '@nestjs/common';
import { TransactiontypesService } from './transactiontypes.service';
import { TransactiontypesController } from './transactiontypes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TransactiontypesController],
  providers: [TransactiontypesService, PrismaService],
})
export class TransactiontypesModule {}
