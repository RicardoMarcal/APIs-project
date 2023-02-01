import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetosService {
  constructor(private prisma: PrismaService) {}

  create(createProjetoDto: CreateProjetoDto) {
    return this.prisma.projeto.create({ data: createProjetoDto });
  }

  findAll() {
    return this.prisma.projeto.findMany();
  }

  findOne(id: number) {
    return this.prisma.projeto.findUnique({ where: { id } });
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
