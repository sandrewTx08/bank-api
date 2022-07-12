import { Injectable } from '@nestjs/common';
import { Prisma, TransactionTypes } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TransactiontypesService {
  constructor(private prisma: PrismaService) {}

  create(
    data: Prisma.TransactionTypesCreateInput,
  ): Promise<TransactionTypes | null> {
    return this.prisma.transactionTypes.create({ data });
  }

  findAll() {
    return this.prisma.transactionTypes.findMany();
  }

  findOne(where: Prisma.TransactionTypesWhereInput) {
    return this.prisma.transactionTypes.findFirst({ where });
  }

  update(
    where: Prisma.TransactionTypesWhereUniqueInput,
    data: Prisma.TransactionTypesUpdateInput,
  ) {
    return this.prisma.transactionTypes.update({ where, data });
  }

  remove(where: Prisma.TransactionTypesWhereUniqueInput) {
    return this.prisma.transactionTypes.delete({ where });
  }
}
