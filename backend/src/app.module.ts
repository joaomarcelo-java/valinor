import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { ColumnModule } from './column/column.module';
import { TaskModule } from './task/task.module';

@Module({
    imports: [
        BoardModule,
        ColumnModule,
        TaskModule,
    ],
})
export class AppModule {}