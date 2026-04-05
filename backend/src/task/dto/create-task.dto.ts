import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTaskDto {
    @IsString({message: 'O titulo deve ser uma string'})
    @IsNotEmpty({message: 'O titulo é obrigatório'})
    @MinLength(3)
    @MaxLength(50)
    @Transform(({ value }) => value.trim())
    title: string;

    @IsDateString()
    limitDate: string;
}