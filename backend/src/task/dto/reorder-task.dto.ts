import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class ReorderTaskDto {
    //Para manipular a ordem das tasks nas colunas, 
    //precisamos do id da task, o id da coluna de origem,
    //o id da coluna de destino e a nova posição da task.
    @IsString()
    @IsNotEmpty()
    taskId: string;

    @IsString()
    @IsNotEmpty()
    fromColumnId: string;

    @IsInt()
    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value, 10))
    fromOrder: number;

    @IsString()
    @IsNotEmpty()
    toColumnId: string;
    
    @IsInt()
    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value, 10))
    toOrder: number;
}