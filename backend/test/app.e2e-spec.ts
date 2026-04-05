import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Fluxo Completo Kanban (E2E)', () => {
  let app: INestApplication;
  let boardId: string;
  let columnId: string;
  let taskId: string;

  // Inicializa a aplicação e as pipes de validação globais antes dos testes
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    // Sincroniza a validação do ambiente de teste com o main.ts
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })); 
    
    await app.init();
  });

  // Valida a criação de um board e armazena o ID para dependências futuras
  it('/POST boards (Criar Board)', async () => {
    const res = await request(app.getHttpServer())
      .post('/boards')
      .send({ title: 'Projeto Kanban - Field Control' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    boardId = res.body.id;
  });

  // Valida a criação de uma coluna vinculada ao board recém-criado
  it('/POST boards/:id/columns (Criar Coluna)', async () => {
    const res = await request(app.getHttpServer())
      .post(`/boards/${boardId}/columns`)
      .send({ title: 'Backlog' });

    expect(res.status).toBe(201);
    columnId = res.body.id;
  });

  // Valida a criação de uma task dentro da estrutura de board e coluna
  it('/POST boards/:id/columns/:id/tasks (Criar Task)', async () => {
    const res = await request(app.getHttpServer())
      .post(`/boards/${boardId}/columns/${columnId}/tasks`)
      .send({ 
        title: 'Configurar Jest', 
        description: 'Implementar testes integrados' 
      });

    expect(res.status).toBe(201);
    taskId = res.body.id;
  });

  // Verifica se o sistema impede a criação de tasks em colunas inexistentes
  it('Deve falhar ao criar Task em Column inexistente', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await request(app.getHttpServer())
      .post(`/boards/${boardId}/columns/${fakeId}/tasks`)
      .send({ title: 'Task Fantasma' });

    expect(res.status).toBeGreaterThanOrEqual(400);
  });

  // Encerra a aplicação para liberar as portas e conexões de banco
  afterAll(async () => {
    await app.close();
  });
});