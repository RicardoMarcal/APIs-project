import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateListaDto {
  @IsString()
  @Length(1, 100)
  @ApiProperty()
  nome: string;

  projetoId: number;
}
