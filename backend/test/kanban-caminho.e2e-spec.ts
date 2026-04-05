import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
// Com esModuleInterop: true, você pode usar o import padrão:
import request from 'supertest'; 
import { AppModule } from './../src/app.module';

describe('Kanban Flow (E2E)', () => {
  let app: INestApplication;
  let createdBoardId: string;
  let createdColumnId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // IMPORTANTE: Adicione isso para que os @IsNotEmpty() dos seus DTOs funcionem no teste
    app.useGlobalPipes(new ValidationPipe()); 
    
    await app.init();
  });

  it('Deve criar um Board, uma Coluna e depois listar (Fluxo Completo)', async () => {
    // 1. Criar Board
    const boardRes = await request(app.getHttpServer())
      .post('/boards')
      .send({ title: 'Board de Teste E2E' });

    expect(boardRes.status).toBe(201);
    expect(boardRes.body).toHaveProperty('id');
    createdBoardId = boardRes.body.id;

    // 2. Criar Coluna vinculada ao Board
    const colRes = await request(app.getHttpServer())
      .post(`/boards/${createdBoardId}/columns`)
      .send({ title: 'Coluna de Teste' });

    expect(colRes.status).toBe(201);
    createdColumnId = colRes.body.id;

    // 3. Listar Colunas
    const listRes = await request(app.getHttpServer())
      .get(`/boards/${createdBoardId}/columns`);

    expect(listRes.status).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);
    expect(listRes.body.some((col: any) => col.id === createdColumnId)).toBe(true);
  });

  it('Deve falhar ao tentar criar um Board sem título (Validação)', async () => {
    const res = await request(app.getHttpServer())
      .post('/boards')
      .send({}); // Corpo vazio para disparar o ValidationPipe

    expect(res.status).toBe(400); 
  });

  afterAll(async () => {
    // Limpeza: Deletar o board criado limpa as colunas (se tiver Cascade no Prisma)
    if (createdBoardId) {
      await request(app.getHttpServer()).delete(`/boards/${createdBoardId}`);
    }
    await app.close();
  });
});