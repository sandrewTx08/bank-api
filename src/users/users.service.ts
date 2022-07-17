import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UsersCreateInput) {
    return this.prisma.users.create({ data });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(where: Prisma.UsersWhereInput) {
    return this.prisma.users.findFirst({ where });
  }

  update(where: Prisma.UsersWhereUniqueInput, data: Prisma.UsersUpdateInput) {
    return this.prisma.users.update({ where, data });
  }

  remove(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.delete({ where });
  }
}
