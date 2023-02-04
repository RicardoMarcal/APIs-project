import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioSelect } from 'src/usuarios/entities/usuario.entity';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetosService {
  constructor(private prisma: PrismaService) {}

  create(createProjetoDto: CreateProjetoDto) {
    return this.prisma.projeto.create({ data: createProjetoDto });
  }

  findAll(criadorId: number) {
    return this.prisma.usuario.findMany({
      where: { id: criadorId },
      select: {
        ...UsuarioSelect,
        projetos: true,
      },
    });
  }

  findOne(criadorId: number, id: number) {
    return this.prisma.projeto.findFirstOrThrow({
      where: { AND: [{ criadorId }, { id }] },
      include: {
        listas: {
          include: {
            tarefas: true,
          },
        },
      },
    });
  }

  update(id: number, updateProjetoDto: UpdateProjetoDto) {
    return this.prisma.projeto.update({
      where: { id },
      data: updateProjetoDto,
    });
  }

  remove(id: number) {
    return this.prisma.projeto.delete({ where: { id } });
  }
}
