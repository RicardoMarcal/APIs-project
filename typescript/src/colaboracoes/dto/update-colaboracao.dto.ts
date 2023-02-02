import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class UpdateColaboracaoDto {
  @IsInt()
  @Min(0)
  @Max(2)
  @ApiProperty()
  permissao: number;
}
