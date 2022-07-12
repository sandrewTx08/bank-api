import { Injectable, UseInterceptors } from '@nestjs/common';
import { Prisma, Transactions } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { LoggingInterceptor } from './transactions.intercerptor';

@UseInterceptors(LoggingInterceptor)
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}

  async transference(from_user_id: number, to_user_id: number, amount: number) {
    const from_user = await this.userService.findOne({ id: from_user_id });
    const from_user_balance = from_user.balance.toNumber();

    const to_user = await this.userService.findOne({ id: to_user_id });
    const to_user_balance = to_user.balance.toNumber();

    if (from_user_balance < amount) return null;
    else {
      await this.userService.update(
        { id: to_user_id },
        { balance: to_user_balance + amount },
      );

      await this.userService.update(
        { id: from_user_id },
        { balance: from_user_balance - amount },
      );

      return { to_user, from_user };
    }
  }

  async deposit(from_user_id: number, amount: number) {
    const from_user = await this.userService.findOne({ id: from_user_id });
    const from_user_balance = from_user.balance.toNumber();

    if (from_user_balance < amount) return null;
    else {
      return await this.userService.update(
        { id: from_user_id },
        { balance: from_user_balance - amount },
      );
    }
  }

  create(data: Prisma.TransactionsCreateInput): Promise<Transactions | null> {
    return this.prisma.transactions.create({ data });
  }

  findAll() {
    return this.prisma.transactions.findMany();
  }

  findOne(where: Prisma.TransactionsWhereInput) {
    return this.prisma.transactions.findFirst({ where });
  }

  update(
    where: Prisma.TransactionsWhereUniqueInput,
    data: Prisma.TransactionsUpdateInput,
  ) {
    return this.prisma.transactions.update({ where, data });
  }

  remove(where: Prisma.TransactionsWhereUniqueInput) {
    return this.prisma.transactions.delete({ where });
  }
}
