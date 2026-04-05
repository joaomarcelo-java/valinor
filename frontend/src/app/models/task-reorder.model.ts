export interface ReorderTask {
  taskId: string;
  fromColumnId: string;
  fromOrder: number;
  toColumnId: string;
  toOrder: number;
}