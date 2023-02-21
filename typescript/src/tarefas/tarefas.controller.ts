import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuarios/:criadorId/projetos/:projetoId/listas/:listaId/tarefas')
@ApiTags('Tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  create(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('listaId') listaId: string,
    @Body() createTarefaDto: CreateTarefaDto,
  ) {
    try {
      createTarefaDto.listaId = +listaId;
      return this.tarefasService.create(
        +criadorId,
        +projetoId,
        createTarefaDto,
      );
    } catch (e) {
      if (e.code === 'P2003') {
        throw new NotFoundException();
      }
      throw new BadRequestException();
    }
  }

  @Get()
  findAll(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('listaId') listaId: string,
  ) {
    return this.tarefasService.findAll(+criadorId, +projetoId, +listaId);
  }

  @Get(':id')
  findOne(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('listaId') listaId: string,
    @Param('id') id: string,
  ) {
    return this.tarefasService.findOne(+criadorId, +projetoId, +listaId, +id);
  }

  @Patch(':id')
  update(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('listaId') listaId: string,
    @Param('id') id: string,
    @Body() updateTarefaDto: UpdateTarefaDto,
  ) {
    return this.tarefasService.update(
      +criadorId,
      +projetoId,
      +listaId,
      +id,
      updateTarefaDto,
    );
  }

  @Delete(':id')
  remove(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('listaId') listaId: string,
    @Param('id') id: string,
  ) {
    return this.tarefasService.remove(+criadorId, +projetoId, +listaId, +id);
  }
}
