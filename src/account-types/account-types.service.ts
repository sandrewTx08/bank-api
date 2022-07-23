import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountTypesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.AccountTypesCreateInput) {
    return this.prisma.accountTypes.create({ data });
  }

  findAll() {
    return this.prisma.accountTypes.findMany();
  }

  findOne(where: Prisma.AccountTypesWhereInput) {
    return this.prisma.accountTypes.findFirst({ where });
  }

  update(
    where: Prisma.AccountTypesWhereUniqueInput,
    data: Prisma.AccountTypesUpdateInput,
  ) {
    return this.prisma.accountTypes.update({ where, data });
  }

  remove(where: Prisma.AccountTypesWhereUniqueInput) {
    return this.prisma.accountTypes.delete({ where });
  }
}
