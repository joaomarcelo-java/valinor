import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho se necessário
import { ColumnService } from '../column/column.service'; // Ajuste o caminho
import { BoardService } from '../board/board.service';   // Ajuste o caminho

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        // Mock do PrismaService
        {
          provide: PrismaService,
          useValue: {
            task: {
              findMany: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
        // Mock do ColumnService
        {
          provide: ColumnService,
          useValue: {
            findOne: jest.fn(),
          },
        },
        // Mock do BoardService
        {
          provide: BoardService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});