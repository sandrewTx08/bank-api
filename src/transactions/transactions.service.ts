import { Injectable } from '@nestjs/common';
import { Prisma, Transactions } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import {
  TransactionDepositPipe,
  TransactionTransferPipe,
} from './transactions.pipe';

@Injectable()
export class TransactionsService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}

  history(
    data: Omit<Prisma.TransactionsUncheckedCreateInput, 'transaction_type'>,
  ) {
    return data.to_user_id
      ? this.prisma.transactions.create({
          data: { ...data, transaction_type: 2 },
        })
      : this.prisma.transactions.create({
          data: { ...data, transaction_type: 1 },
        });
  }

  async transfer(data: TransactionTransferPipe) {
    const { from_user_id, to_user_id, amount } = data;

    const [from_user, to_user] = await Promise.all([
      this.userService.findOne({ id: from_user_id }),
      this.userService.findOne({ id: to_user_id }),
    ]);

    if (!to_user || !from_user) return 'Error';

    const from_user_balance = from_user.balance.toNumber();
    const to_user_balance = to_user.balance.toNumber();

    if (from_user_balance < amount) return null;

    const [to_user_update, from_user_update] = await Promise.all([
      this.userService.update(
        { id: to_user_id },
        { balance: to_user_balance + amount },
      ),
      this.userService.update(
        { id: from_user_id },
        { balance: from_user_balance - amount },
      ),
      this.history({ amount, from_user_id, to_user_id }),
    ]);

    return { to_user: to_user_update, from_user: from_user_update };
  }

  async deposit(data: TransactionDepositPipe) {
    const { from_user_id, amount } = data;

    const from_user = await this.userService.findOne({ id: from_user_id });
    const from_user_balance = from_user.balance.toNumber();

    const [from_user_update] = await Promise.all([
      this.userService.update(
        { id: from_user_id },
        { balance: from_user_balance + amount },
      ),
      this.history({ amount, from_user_id }),
    ]);

    return { from_user: from_user_update };
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
