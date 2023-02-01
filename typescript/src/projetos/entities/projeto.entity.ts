import { ApiProperty } from '@nestjs/swagger';
import { Projeto } from '@prisma/client';

export class ProjetoEntity implements Projeto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  orcamento: number | null;

  @ApiProperty()
  localizacao: string | null;

  @ApiProperty()
  criadorId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
