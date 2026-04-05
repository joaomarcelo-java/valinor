import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BoardModule } from '../board/board.module';
import { ColumnModule } from '../column/column.module';


@Module({
    imports: [
        PrismaModule,
        BoardModule,
        ColumnModule,
    ],
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService],
})
export class TaskModule {}