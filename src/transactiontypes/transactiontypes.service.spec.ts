import { Test, TestingModule } from '@nestjs/testing';
import { TransactiontypesService } from './transactiontypes.service';

describe('TransactiontypesService', () => {
  let service: TransactiontypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactiontypesService],
    }).compile();

    service = module.get<TransactiontypesService>(TransactiontypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
