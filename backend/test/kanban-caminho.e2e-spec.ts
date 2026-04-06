import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
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
    
    app.useGlobalPipes(new ValidationPipe()); 
    
    await app.init();
  });

  it('Deve criar um Board, uma Coluna e depois listar (Fluxo Completo)', async () => {
    const boardRes = await request(app.getHttpServer())
      .post('/boards')
      .send({ title: 'Board de Teste E2E' });

    expect(boardRes.status).toBe(201);
    expect(boardRes.body).toHaveProperty('id');
    createdBoardId = boardRes.body.id;

    const colRes = await request(app.getHttpServer())
      .post(`/boards/${createdBoardId}/columns`)
      .send({ title: 'Coluna de Teste' });

    expect(colRes.status).toBe(201);
    createdColumnId = colRes.body.id;

    const listRes = await request(app.getHttpServer())
      .get(`/boards/${createdBoardId}/columns`);

    expect(listRes.status).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);
    expect(listRes.body.some((col: any) => col.id === createdColumnId)).toBe(true);
  });

  it('Deve falhar ao tentar criar um Board sem título (Validação)', async () => {
    const res = await request(app.getHttpServer())
      .post('/boards')
      .send({}); 

    expect(res.status).toBe(400); 
  });

  afterAll(async () => {
    if (createdBoardId) {
      await request(app.getHttpServer()).delete(`/boards/${createdBoardId}`);
    }
    await app.close();
  });
});