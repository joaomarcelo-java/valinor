import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

describe('BoardController', () => {
  let controller: BoardController;

  // Configura o módulo de teste injetando o controller e o mock(mock = simular comportamento de dependencias) do serviço
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        {
          provide: BoardService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BoardController>(BoardController);
  });

  // Verifica se a instância do controller foi criada corretamente
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});