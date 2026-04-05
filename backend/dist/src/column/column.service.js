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
exports.ColumnService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const board_service_1 = require("../board/board.service");
let ColumnService = class ColumnService {
    constructor(prisma, boardService) {
        this.prisma = prisma;
        this.boardService = boardService;
    }
    async create(createColumnDto, boardId) {
        await this.boardService.findOne(boardId);
        const lastColumn = await this.prisma.column.findFirst({
            where: { boardId },
            orderBy: { order: 'desc' },
        });
        const order = lastColumn ? lastColumn.order + 1 : 1;
        return await this.prisma.column.create({
            data: {
                ...createColumnDto,
                boardId,
                order,
            },
        });
    }
    async findOne(columnId, boardId) {
        await this.boardService.findOne(boardId);
        const column = await this.prisma.column.findFirst({
            where: { id: columnId, boardId },
            include: { tasks: { orderBy: { order: 'asc' } } },
        });
        if (!column) {
            throw new common_1.NotFoundException('Coluna não encontrada!');
        }
        return column;
    }
    async findAll(boardId) {
        return await this.prisma.column.findMany({
            where: { boardId },
            orderBy: { order: 'asc' },
            include: { tasks: { orderBy: { order: 'asc' } } },
        });
    }
    async update(columnId, boardId, updateColumnDto) {
        await this.findOne(columnId, boardId);
        return await this.prisma.column.update({
            where: { id: columnId },
            data: updateColumnDto,
            include: { tasks: true },
        });
    }
    async delete(columnId, boardId) {
        const column = await this.findOne(columnId, boardId);
        await this.prisma.$transaction([
            this.prisma.column.delete({
                where: { id: columnId },
            }),
            this.prisma.column.updateMany({
                where: { boardId, order: { gt: column.order } },
                data: { order: { decrement: 1 } },
            }),
        ]);
        return { message: 'Coluna removida com sucesso!' };
    }
    async reorder(boardId, reorderColumnDto) {
        const { columnId, fromOrder, toOrder } = reorderColumnDto;
        const column = await this.findOne(columnId, boardId);
        if (fromOrder === toOrder) {
            return column;
        }
        await this.prisma.$transaction(async (tx) => {
            if (toOrder < fromOrder) {
                await tx.column.updateMany({
                    where: { boardId, order: { gte: toOrder, lt: fromOrder } },
                    data: { order: { increment: 1 } },
                });
            }
            if (toOrder > fromOrder) {
                await tx.column.updateMany({
                    where: { boardId, order: { gt: fromOrder, lte: toOrder } },
                    data: { order: { decrement: 1 } },
                });
            }
            await tx.column.update({
                where: { id: columnId },
                data: { order: toOrder },
            });
        });
    }
};
exports.ColumnService = ColumnService;
exports.ColumnService = ColumnService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        board_service_1.BoardService])
], ColumnService);
//# sourceMappingURL=column.service.js.map