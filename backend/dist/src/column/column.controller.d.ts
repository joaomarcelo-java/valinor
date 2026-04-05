import { ColumnService } from './column.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { ReorderColumnDto } from './dto/reorder-column.dto';
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    reorder(boardId: string, dto: ReorderColumnDto): Promise<{
        tasks: {
            title: string;
            id: string;
            createdAt: Date;
            order: number;
            limitDate: Date;
            columnId: string;
        }[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    }>;
    create(boardId: string, createColumnDto: CreateColumnDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    }>;
    findOne(boardId: string, id: string): Promise<{
        tasks: {
            title: string;
            id: string;
            createdAt: Date;
            order: number;
            limitDate: Date;
            columnId: string;
        }[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    }>;
    findAll(boardId: string): Promise<({
        tasks: {
            title: string;
            id: string;
            createdAt: Date;
            order: number;
            limitDate: Date;
            columnId: string;
        }[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    })[]>;
    update(boardId: string, id: string, updateColumnDto: UpdateColumnDto): Promise<{
        tasks: {
            title: string;
            id: string;
            createdAt: Date;
            order: number;
            limitDate: Date;
            columnId: string;
        }[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    }>;
    delete(boardId: string, id: string): Promise<{
        message: string;
    }>;
}
