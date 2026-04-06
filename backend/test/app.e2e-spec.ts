import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Fluxo Completo Kanban (E2E)', () => {
  let app: INestApplication;
  let boardId: string;
  let columnId: string;
  let taskId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })); 
    
    await app.init();
  });

  it('/POST boards (Criar Board)', async () => {
    const res = await request(app.getHttpServer())
      .post('/boards')
      .send({ title: 'Projeto Kanban - Field Control' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    boardId = res.body.id;
  });

  it('/POST boards/:id/columns (Criar Coluna)', async () => {
    const res = await request(app.getHttpServer())
      .post(`/boards/${boardId}/columns`)
      .send({ title: 'Backlog' });

    expect(res.status).toBe(201);
    columnId = res.body.id;
  });

it('/POST boards/:id/columns/:id/tasks (Criar Task)', async () => {
  const res = await request(app.getHttpServer())
    .post(`/boards/${boardId}/columns/${columnId}/tasks`)
    .send({ 
      title: 'Configurar Jest',
      limitDate: '2026-12-31T00:00:00.000Z'
    });
  expect(res.status).toBe(201);
  taskId = res.body.id;
});

it('/POST boards/:id/columns/:id/tasks (Criar Task)', async () => {
  const res = await request(app.getHttpServer())
    .post(`/boards/${boardId}/columns/${columnId}/tasks`)
    .send({ 
      title: 'Configurar Jest',
      limitDate: '2026-12-31T00:00:00.000Z'
    });
    
  expect(res.status).toBe(201);
  taskId = res.body.id;
});

  afterAll(async () => {
    await app.close();
  });
});