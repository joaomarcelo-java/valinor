import { Test, TestingModule } from '@nestjs/testing';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';

describe('ColumnController', () => {
  let controller: ColumnController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnController],
      providers: [
        {
          provide: ColumnService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            reorder: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ColumnController>(ColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});