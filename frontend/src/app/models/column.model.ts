import { Task } from './task.model';

export interface Column{
    id: string;
    title: string;
    order: number;
    boardId: string;
    createdAt: Date;
    tasks: Task[];
}