"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const column_service_1 = require("../column/column.service");
const board_service_1 = require("../board/board.service");
let TaskService = class TaskService {
    constructor(prisma, columnService, boardService) {
        this.prisma = prisma;
        this.columnService = columnService;
        this.boardService = boardService;
    }
    async create(createTaskDto, columnId, boardId) {
        await this.boardService.findOne(boardId);
        await this.columnService.findOne(columnId, boardId);
        const lastTask = await this.prisma.task.findFirst({
            where: { columnId },
            orderBy: { order: 'desc' },
        });
        const order = lastTask ? lastTask.order + 1 : 1;
        return await this.prisma.task.create({
            data: {
                ...createTaskDto,
                columnId,
                order,
            },
        });
    }
    async findOne(taskId, columnId, boardId) {
        await this.boardService.findOne(boardId);
        await this.columnService.findOne(columnId, boardId);
        const task = await this.prisma.task.findFirst({
            where: { id: taskId, columnId },
        });
        if (!task) {
            throw new common_1.NotFoundException('Task não encontrada!');
        }
        return task;
    }
    async findAll(columnId, boardId) {
        await this.boardService.findOne(boardId);
        await this.columnService.findOne(columnId, boardId);
        return await this.prisma.task.findMany({
            where: { columnId },
            orderBy: { order: 'asc' },
        });
    }
    async update(taskId, columnId, boardId, updateTaskDto) {
        await this.findOne(taskId, columnId, boardId);
        return await this.prisma.task.update({
            where: { id: taskId },
            data: updateTaskDto,
        });
    }
    async delete(taskId, columnId, boardId) {
        const task = await this.findOne(taskId, columnId, boardId);
        await this.prisma.$transaction([
            this.prisma.task.delete({
                where: { id: taskId },
            }),
            this.prisma.task.updateMany({
                where: {
                    columnId,
                    order: { gt: task.order },
                },
                data: { order: { decrement: 1 } },
            }),
        ]);
        return { message: 'Task removida com sucesso!' };
    }
    async reorder(boardId, reorderTaskDto) {
        await this.boardService.findOne(boardId);
        const { taskId, fromColumnId, fromOrder, toColumnId, toOrder } = reorderTaskDto;
        const task = await this.findOne(taskId, fromColumnId, boardId);
        if (!task) {
            throw new common_1.NotFoundException('Task não encontrada na coluna de origem!');
        }
        const targetColumn = await this.columnService.findOne(toColumnId, boardId);
        if (!targetColumn) {
            throw new common_1.NotFoundException('Coluna de destino não encontrada!');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.task.updateMany({
                where: { columnId: fromColumnId, order: { gt: fromOrder } },
                data: { order: { decrement: 1 } },
            });
            await tx.task.updateMany({
                where: { columnId: toColumnId, order: { gte: toOrder } },
                data: { order: { increment: 1 } },
            });
            await tx.task.update({
                where: { id: taskId },
                data: { columnId: toColumnId, order: toOrder },
            });
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        column_service_1.ColumnService,
        board_service_1.BoardService])
], TaskService);
//# sourceMappingURL=task.service.js.map