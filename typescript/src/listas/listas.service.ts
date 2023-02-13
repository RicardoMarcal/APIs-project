import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';

@Injectable()
export class ListasService {
  constructor(private prisma: PrismaService) {}

  create(createListaDto: CreateListaDto) {
    return this.prisma.lista.create({ data: createListaDto });
  }

  findAll(criadorId: number, projetoId: number) {
    return this.prisma.lista.findMany({
      where: { AND: [{ projetoId }, { projeto: { criadorId } }] },
    });
  }

  findOne(criadorId: number, projetoId: number, id: number) {
    return this.prisma.lista.findFirstOrThrow({
      where: {
        AND: [{ id }, { projetoId }, { projeto: { criadorId } }],
      },
      include: { tarefas: true },
    });
  }

  update(
    criadorId: number,
    projetoId: number,
    id: number,
    updateListaDto: UpdateListaDto,
  ) {
    this.findOne(+criadorId, +projetoId, +id);
    return this.prisma.lista.update({
      where: { id_projetoId: { id, projetoId } },
      data: updateListaDto,
    });
  }

  remove(criadorId: number, projetoId: number, id: number) {
    this.findOne(+criadorId, +projetoId, +id);
    return this.prisma.lista.delete({
      where: { id_projetoId: { id, projetoId } },
    });
  }
}
