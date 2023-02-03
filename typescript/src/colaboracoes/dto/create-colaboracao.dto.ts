import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max } from 'class-validator';

export class CreateColaboracaoDto {
  @IsInt()
  usuarioId: number;

  @IsInt()
  projetoId: number;

  @IsInt()
  @Min(0)
  @Max(2)
  @ApiProperty()
  permissao: number;
}
