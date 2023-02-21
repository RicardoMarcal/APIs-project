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
import { ListasService } from './listas.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuarios/:criadorId/projetos/:projetoId/listas')
@ApiTags('Listas')
export class ListasController {
  constructor(private readonly listasService: ListasService) {}

  @Post()
  async create(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Body() createListaDto: CreateListaDto,
  ) {
    try {
      createListaDto.projetoId = +projetoId;
      return await this.listasService.create(createListaDto);
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
  ) {
    return this.listasService.findAll(+criadorId, +projetoId);
  }

  @Get(':id')
  findOne(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('id') id: string,
  ) {
    return this.listasService.findOne(+criadorId, +projetoId, +id);
  }

  @Patch(':id')
  update(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('id') id: string,
    @Body() updateListaDto: UpdateListaDto,
  ) {
    return this.listasService.update(
      +criadorId,
      +projetoId,
      +id,
      updateListaDto,
    );
  }

  @Delete(':id')
  remove(
    @Param('criadorId') criadorId: string,
    @Param('projetoId') projetoId: string,
    @Param('id') id: string,
  ) {
    return this.listasService.remove(+criadorId, +projetoId, +id);
  }
}
