import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class ReorderColumnDto {
    @IsString()
    @IsNotEmpty()
    columnId: string;

    @IsInt()
    @IsNotEmpty()
    fromOrder: number;

    @IsInt()
    @IsNotEmpty()
    toOrder: number;
}