import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactiontypesModule } from './transactiontypes/transactiontypes.module';

@Module({
  imports: [UsersModule, TransactionsModule, TransactiontypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
