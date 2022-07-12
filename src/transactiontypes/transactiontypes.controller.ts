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
    return this.transactiontypesService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionTypeDto: Prisma.TransactionTypesUpdateInput,
  ) {
    return this.transactiontypesService.update(
      { id: +id },
      updateTransactionTypeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactiontypesService.remove({ id: +id });
  }
}
