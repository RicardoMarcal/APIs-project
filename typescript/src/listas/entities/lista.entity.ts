import { ApiProperty } from '@nestjs/swagger';
import { Lista } from '@prisma/client';

export class ListaEntity implements Lista {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  projetoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
