import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProjetoDto {
  @IsString()
  @Length(3, 10)
  @ApiProperty()
  nome: string;

  @IsInt()
  @ApiProperty()
  orcamento: number | 0;

  @IsString()
  @ApiProperty()
  localizacao: string | null;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  criadorId: number;
}
