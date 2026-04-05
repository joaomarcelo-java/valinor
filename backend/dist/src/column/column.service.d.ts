import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BoardService } from '../board/board.service';
import { ReorderColumnDto } from './dto/reorder-column.dto';
export declare class ColumnService {
    private prisma;
    private boardService;
    constructor(prisma: PrismaService, boardService: BoardService);
    create(createColumnDto: CreateColumnDto, boardId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
        order: number;
        boardId: string;
    }>;
    findOne(columnId: string, boardId: string): Promise<{
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
    update(columnId: string, boardId: string, updateColumnDto: UpdateColumnDto): Promise<{
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
    delete(columnId: string, boardId: string): Promise<{
        message: string;
    }>;
    reorder(boardId: string, reorderColumnDto: ReorderColumnDto): Promise<{
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
}
