import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
