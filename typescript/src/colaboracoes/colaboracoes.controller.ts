import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ColaboracoesService } from './colaboracoes.service';
import { CreateColaboracaoDto } from './dto/create-colaboracao.dto';
import { UpdateColaboracaoDto } from './dto/update-colaboracao.dto';
import { ColaboracaoEntity } from './entities/colaboracao.entity';

@Controller('usuarios/:usuarioId/colaboracoes')
@ApiTags('colaboracoes')
export class ColaboracoesController {
  constructor(private readonly colaboracoesService: ColaboracoesService) {}

  @Get()
  @ApiOkResponse({ type: ColaboracaoEntity, isArray: true })
  async findAll(@Param('usuarioId') usuarioId: string) {
    try {
      return await this.colaboracoesService.findAll(+usuarioId);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Get(':projetoId')
  @ApiOkResponse({ type: ColaboracaoEntity })
  async findOne(
    @Param('usuarioId') usuarioId: string,
    @Param('projetoId') projetoId: string,
  ) {
    try {
      return await this.colaboracoesService.findOne(+usuarioId, +projetoId);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Delete(':usuarioId/:projetoId')
  @ApiOkResponse({ type: ColaboracaoEntity })
  async remove(
    @Param('usuarioId') usuarioId: string,
    @Param('projetoId') projetoId: string,
  ) {
    try {
      return await this.colaboracoesService.remove(+usuarioId, +projetoId);
    } catch (e) {
      throw new BadRequestException();
    }
  }
}

@Controller('usuarios/:criadorId/projetos/:projetoId/colaboracoes')
@ApiTags('colaboracoes')
export class ColaboracoesProjetosController {
  constructor(private readonly colaboracoesService: ColaboracoesService) {}

  @Post()
  @ApiCreatedResponse({ type: ColaboracaoEntity })
  async create(@Body() createColaboracoeDto: CreateColaboracaoDto) {
    try {
      return await this.colaboracoesService.create(createColaboracoeDto);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Get()
  @ApiOkResponse({ type: ColaboracaoEntity, isArray: true })
  async findAll(@Param('usuarioId') usuarioId: string) {
    try {
      return await this.colaboracoesService.findAll(+usuarioId);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Get(':usuarioEmail')
  @ApiOkResponse({ type: ColaboracaoEntity })
  async findOne(
    @Param('usuarioId') usuarioId: string,
    @Param('projetoId') projetoId: string,
  ) {
    try {
      return await this.colaboracoesService.findOne(+usuarioId, +projetoId);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Patch(':usuarioId/:projetoId')
  @ApiOkResponse({ type: ColaboracaoEntity })
  async update(
    @Param('usuarioId') usuarioId: string,
    @Param('projetoId') projetoId: string,
    @Body() updateColaboracaoDto: UpdateColaboracaoDto,
  ) {
    try {
      return await this.colaboracoesService.update(
        +usuarioId,
        +projetoId,
        updateColaboracaoDto,
      );
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Delete(':usuarioId/:projetoId')
  @ApiOkResponse({ type: ColaboracaoEntity })
  async remove(
    @Param('usuarioId') usuarioId: string,
    @Param('projetoId') projetoId: string,
  ) {
    try {
      return await this.colaboracoesService.remove(+usuarioId, +projetoId);
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
