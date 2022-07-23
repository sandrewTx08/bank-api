import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProductsCreateInput) {
    return this.prisma.products.create({ data });
  }

  findAll() {
    return this.prisma.products.findMany();
  }

  findOne(where: Prisma.ProductsWhereInput) {
    return this.prisma.products.findFirst({ where });
  }

  update(
    where: Prisma.ProductsWhereUniqueInput,
    data: Prisma.ProductsUpdateInput,
  ) {
    return this.prisma.products.update({ where, data });
  }

  remove(where: Prisma.ProductsWhereUniqueInput) {
    return this.prisma.products.delete({ where });
  }
}
