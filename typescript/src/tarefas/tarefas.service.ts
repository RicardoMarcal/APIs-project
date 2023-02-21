import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Injectable()
export class TarefasService {
  constructor(private prisma: PrismaService) {}

  verifyRoute(criadorId: number, projetoId: number, listaId?: number) {
    this.prisma.usuario.findUnique({ where: { id: criadorId } });
    this.prisma.projeto.findUnique({ where: { id: projetoId } });
    if (listaId) {
      this.prisma.lista.findUnique({ where: { id: listaId } });
    }
  }

  create(
    criadorId: number,
    projetoId: number,
    createTarefaDto: CreateTarefaDto,
  ) {
    this.verifyRoute(criadorId, projetoId);
    return this.prisma.tarefa.create({ data: createTarefaDto });
  }

  findAll(criadorId: number, projetoId: number, listaId: number) {
    this.verifyRoute(criadorId, projetoId);
    return this.prisma.tarefa.findMany({ where: { listaId } });
  }

  findOne(criadorId: number, projetoId: number, listaId: number, id: number) {
    this.verifyRoute(criadorId, projetoId);
    return this.prisma.tarefa.findUniqueOrThrow({
      where: { id_listaId: { id, listaId } },
    });
  }

  update(
    criadorId: number,
    projetoId: number,
    listaId: number,
    id: number,
    updateTarefaDto: UpdateTarefaDto,
  ) {
    this.verifyRoute(criadorId, projetoId);
    return this.prisma.tarefa.update({
      where: { id_listaId: { id, listaId } },
      data: updateTarefaDto,
    });
  }

  remove(criadorId: number, projetoId: number, listaId: number, id: number) {
    this.verifyRoute(criadorId, projetoId);
    return this.prisma.tarefa.delete({
      where: { id_listaId: { id, listaId } },
    });
  }
}
