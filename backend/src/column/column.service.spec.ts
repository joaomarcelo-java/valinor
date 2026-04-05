import { Test, TestingModule } from '@nestjs/testing';
import { ColumnService } from './column.service';
import { PrismaService } from '../prisma/prisma.service';
import { BoardService } from '../board/board.service';

describe('ColumnService', () => {
  let service: ColumnService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [
        ColumnService,
        {
          provide: PrismaService,
          useValue: {
            column: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
        {
          provide: BoardService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ColumnService>(ColumnService);
  });

  // Encerra o módulo de teste para liberar recursos e evitar vazamento de memória
  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});