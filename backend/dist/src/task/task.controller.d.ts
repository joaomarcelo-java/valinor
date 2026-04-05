import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ReorderTaskDto } from './dto/reorder-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    reorder(boardId: string, dto: ReorderTaskDto): Promise<void>;
    create(boardId: string, columnId: string, createTaskDto: CreateTaskDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    findOne(boardId: string, columnId: string, taskId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    findAll(boardId: string, columnId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }[]>;
    update(boardId: string, columnId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        limitDate: Date;
        columnId: string;
    }>;
    delete(boardId: string, columnId: string, taskId: string): Promise<{
        message: string;
    }>;
}
