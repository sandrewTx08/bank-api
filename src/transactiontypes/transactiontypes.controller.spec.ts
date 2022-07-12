import { Test, TestingModule } from '@nestjs/testing';
import { TransactiontypesController } from './transactiontypes.controller';
import { TransactiontypesService } from './transactiontypes.service';

describe('TransactiontypesController', () => {
  let controller: TransactiontypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactiontypesController],
      providers: [TransactiontypesService],
    }).compile();

    controller = module.get<TransactiontypesController>(TransactiontypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
