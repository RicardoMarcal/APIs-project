import { ApiProperty } from '@nestjs/swagger';
import { Tarefa } from '@prisma/client';

export class TarefaEntity implements Tarefa {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  estado: boolean;

  @ApiProperty()
  dataDeEntrega: Date;

  @ApiProperty()
  listaId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
