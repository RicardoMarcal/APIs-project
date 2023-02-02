import { ApiProperty } from '@nestjs/swagger';
import { Colaboracao } from '@prisma/client';

export class ColaboracaoEntity implements Colaboracao {
  @ApiProperty()
  usuarioId: number;

  @ApiProperty()
  projetoId: number;

  @ApiProperty()
  permissao: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
