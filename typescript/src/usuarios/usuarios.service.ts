import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioSelect } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    createUsuarioDto.senha = await CreateUsuarioDto.hashSenha(
      createUsuarioDto.senha,
    );
    return this.prisma.usuario.create({
      select: { ...UsuarioSelect },
      data: createUsuarioDto,
    });
  }

  findAll() {
    return this.prisma.usuario.findMany({ select: { ...UsuarioSelect } });
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      select: {
        ...UsuarioSelect,
        projetos: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
      select: { ...UsuarioSelect },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      select: { ...UsuarioSelect },
      data: updateUsuarioDto,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
      select: { ...UsuarioSelect },
    });
  }
}
