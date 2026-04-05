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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnController = void 0;
const common_1 = require("@nestjs/common");
const column_service_1 = require("./column.service");
const create_column_dto_1 = require("./dto/create-column.dto");
const update_column_dto_1 = require("./dto/update-column.dto");
const reorder_column_dto_1 = require("./dto/reorder-column.dto");
let ColumnController = class ColumnController {
    constructor(columnService) {
        this.columnService = columnService;
    }
    reorder(boardId, dto) {
        return this.columnService.reorder(boardId, dto);
    }
    create(boardId, createColumnDto) {
        return this.columnService.create(createColumnDto, boardId);
    }
    findOne(boardId, id) {
        return this.columnService.findOne(id, boardId);
    }
    findAll(boardId) {
        return this.columnService.findAll(boardId);
    }
    update(boardId, id, updateColumnDto) {
        return this.columnService.update(id, boardId, updateColumnDto);
    }
    delete(boardId, id) {
        return this.columnService.delete(id, boardId);
    }
};
exports.ColumnController = ColumnController;
__decorate([
    (0, common_1.Patch)('reorder'),
    __param(0, (0, common_1.Param)('boardId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reorder_column_dto_1.ReorderColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "reorder", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('boardId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_column_dto_1.CreateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('boardId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('boardId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_column_dto_1.UpdateColumnDto]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('boardId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ColumnController.prototype, "delete", null);
exports.ColumnController = ColumnController = __decorate([
    (0, common_1.Controller)('boards/:boardId/columns'),
    __metadata("design:paramtypes", [column_service_1.ColumnService])
], ColumnController);
//# sourceMappingURL=column.controller.js.map