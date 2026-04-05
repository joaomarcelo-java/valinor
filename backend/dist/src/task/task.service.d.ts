import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ColumnService } from '../column/column.service';
import { BoardService } from '../board/board.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ReorderTaskDto } from './dto/reorder-task.dto';
export declare class TaskService {
    private readonly prisma;
    private columnService;
    private boardService;
    constructor(prisma: PrismaService, columnService: ColumnService, boardService: BoardService);
    create(createTaskDto: CreateTaskDto, columnId: string, boardId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    findOne(taskId: string, columnId: string, boardId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    findAll(columnId: string, boardId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }[]>;
    update(taskId: string, columnId: string, boardId: string, updateTaskDto: UpdateTaskDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    delete(taskId: string, columnId: string, boardId: string): Promise<{
        message: string;
    }>;
    reorder(boardId: string, reorderTaskDto: ReorderTaskDto): Promise<void>;
}
