import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactiontypesService } from './transactiontypes.service';
import { Prisma } from '@prisma/client';

@Controller('transactiontypes')
export class TransactiontypesController {
  constructor(
    private readonly transactiontypesService: TransactiontypesService,
  ) {}

  @Post()
  create(@Body() createTransactionTypeDto: Prisma.TransactionTypesCreateInput) {
    return this.transactiontypesService.create(createTransactionTypeDto);
  }

  @Get()
  findAll() {
    return this.transactiontypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transactiontypesService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTransactionTypeDto: Prisma.TransactionTypesUpdateInput,
  ) {
    return this.transactiontypesService.update(
      { id },
      updateTransactionTypeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transactiontypesService.remove({ id });
  }
}
