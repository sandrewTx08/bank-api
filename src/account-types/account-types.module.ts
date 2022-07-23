import { Module } from '@nestjs/common';
import { AccountTypesService } from './account-types.service';
import { AccountTypesController } from './account-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AccountTypesController],
  providers: [AccountTypesService, PrismaService]
})
export class AccountTypesModule {}
