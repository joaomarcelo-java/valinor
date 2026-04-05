import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    createBoard(createBoardDto: CreateBoardDto): Promise<{
        title: string;
        id: string;
        createdAt: Date;
    }>;
    getBoard(boardId: string): Promise<{
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
    getAllBoards(): Promise<({
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
    updateBoard(boardId: string, updateBoardDto: CreateBoardDto): Promise<{
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
    deleteBoard(boardId: string): Promise<{
        title: string;
        id: string;
        createdAt: Date;
    }>;
}
