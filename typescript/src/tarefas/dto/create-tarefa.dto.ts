import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString, Length } from 'class-validator';

export class CreateTarefaDto {
  @IsString()
  @Length(1, 200)
  @ApiProperty()
  nome: string;

  @IsBoolean()
  @ApiProperty()
  estado: boolean;

  @IsDate()
  @ApiProperty()
  dataDeEntrega: Date;

  listaId: number;
}
