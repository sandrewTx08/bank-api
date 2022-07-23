import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.AccountsCreateInput) {
    return this.prisma.accounts.create({ data });
  }

  findAll() {
    return this.prisma.accounts.findMany();
  }

  findOne(where: Prisma.AccountsWhereInput) {
    return this.prisma.accounts.findFirst({ where });
  }

  update(
    where: Prisma.AccountsWhereUniqueInput,
    data: Prisma.AccountsUpdateInput,
  ) {
    return this.prisma.accounts.update({ where, data });
  }

  remove(where: Prisma.AccountsWhereUniqueInput) {
    return this.prisma.accounts.delete({ where });
  }
}
