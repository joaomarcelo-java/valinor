import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],       // importa o módulo do Prisma
    controllers: [BoardController], // registra o controller
    providers: [BoardService],      // registra o service
    exports: [BoardService],        // exporta o service
})
export class BoardModule {}