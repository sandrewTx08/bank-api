import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductTypesService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProductTypesCreateInput) {
    return this.prisma.productTypes.create({ data });
  }

  findAll() {
    return this.prisma.productTypes.findMany();
  }

  findOne(where: Prisma.ProductTypesWhereInput) {
    return this.prisma.productTypes.findFirst({ where });
  }

  update(
    where: Prisma.ProductTypesWhereUniqueInput,
    data: Prisma.ProductTypesUpdateInput,
  ) {
    return this.prisma.productTypes.update({ where, data });
  }

  remove(where: Prisma.ProductTypesWhereUniqueInput) {
    return this.prisma.productTypes.delete({ where });
  }
}
