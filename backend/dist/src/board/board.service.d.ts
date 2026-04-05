import { PrismaService } from '../prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBoardDto: CreateBoardDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        columns: ({
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
        })[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        columns: ({
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
        })[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
    }>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<{
        columns: {
            title: string;
            id: string;
            createdAt: Date;
            order: number;
            boardId: string;
        }[];
    } & {
        title: string;
        id: string;
        createdAt: Date;
    }>;
    delete(id: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
    }>;
}
