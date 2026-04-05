import { Module } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnController } from './column.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BoardModule } from '../board/board.module';

@Module({
  imports: [
    PrismaModule,
    BoardModule,
  ],
  controllers: [ColumnController],
  providers: [ColumnService],
  exports: [ColumnService],
})
export class ColumnModule {}