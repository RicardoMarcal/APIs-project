import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import * as bcrypt from 'bcrypt';

export class CreateUsuarioDto {
  @IsString()
  @Length(3, 100)
  @ApiProperty()
  nome: string;

  @IsString()
  @IsEmail()
  @Length(3, 100)
  @ApiProperty()
  email: string;

  @IsString()
  @Length(6, 50)
  @ApiProperty()
  senha: string;

  static async hashSenha(senha: string): Promise<string> {
    return await bcrypt.hash(senha, 10);
  }
}
