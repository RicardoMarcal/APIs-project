import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length } from 'class-validator';

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

  criadorId: number;
}
