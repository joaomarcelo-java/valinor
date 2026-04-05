import { IsString, IsNotEmpty, MinLength, MaxLength,  } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBoardDto {

    @Transform(({value}) => value?.trim())
    @IsString({message: 'O título deve ser um texto!'})
    @IsNotEmpty({message: 'O título é obrigatório!'})
    @MinLength(3, {message: 'O título deve conter no mínimo 3 caracteres!'})
    @MaxLength(50, {message: 'O título deve conter no máximo 50 caracteres!'})
    title: string;
}