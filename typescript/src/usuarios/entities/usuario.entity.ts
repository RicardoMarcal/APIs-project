import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '@prisma/client';

export const UsuarioSelect = {
  id: true,
  nome: true,
  email: true,
  createdAt: true,
  updatedAt: true,
};

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
