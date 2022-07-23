import { Module } from '@nestjs/common';
import { ProductTypesService } from './product-types.service';
import { ProductTypesController } from './product-types.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProductTypesController],
  providers: [ProductTypesService, PrismaService],
})
export class ProductTypesModule {}
