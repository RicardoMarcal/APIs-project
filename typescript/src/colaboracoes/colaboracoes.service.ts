import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateColaboracaoDto } from './dto/create-colaboracao.dto';
import { UpdateColaboracaoDto } from './dto/update-colaboracao.dto';

@Injectable()
export class ColaboracoesService {
  constructor(private prisma: PrismaService) {}

  create(createColaboracaoDto: CreateColaboracaoDto) {
    return this.prisma.colaboracao.create({ data: createColaboracaoDto });
  }

  findAll() {
    return this.prisma.colaboracao.findMany();
  }

  findUserCollborations(usuarioId: number) {
    return this.prisma.colaboracao.findMany({ where: { usuarioId } });
  }

  findOne(usuarioId: number, projetoId: number) {
    return this.prisma.colaboracao.findUnique({
      where: { usuarioId_projetoId: { usuarioId, projetoId } },
    });
  }

  update(
    usuarioId: number,
    projetoId: number,
    updateColaboracaoDto: UpdateColaboracaoDto,
  ) {
    return this.prisma.colaboracao.update({
      where: { usuarioId_projetoId: { usuarioId, projetoId } },
      data: updateColaboracaoDto,
    });
  }

  remove(usuarioId: number, projetoId: number) {
    return this.prisma.colaboracao.delete({
      where: { usuarioId_projetoId: { usuarioId, projetoId } },
    });
  }
}
