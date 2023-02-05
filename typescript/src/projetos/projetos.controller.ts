import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProjetoEntity } from './entities/projeto.entity';

@Controller('usuarios/:criadorId/projetos')
@ApiTags('projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Post()
  @ApiCreatedResponse({ type: ProjetoEntity })
  async create(
    @Param('criadorId') criadorId: string,
    @Body() createProjetoDto: CreateProjetoDto,
  ) {
    try {
      createProjetoDto.criadorId = +criadorId;
      return await this.projetosService.create(createProjetoDto);
    } catch (e) {
      if (e.code === 'P2003') {
        throw new NotFoundException("There is no 'usuario' with this id");
      }
      throw new BadRequestException();
    }
  }

  @Get()
  @ApiOkResponse({ type: ProjetoEntity, isArray: true })
  async findAll(@Param('criadorId') criadorId: string) {
    try {
      return await this.projetosService.findAll(+criadorId);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundException("There is no 'usuario' with this id");
      }
      throw new BadRequestException();
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async findOne(
    @Param('criadorId') criadorId: string,
    @Param('id') id: string,
  ) {
    try {
      return await this.projetosService.findOne(+criadorId, +id);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundException(e.meta?.cause);
      }
      throw new BadRequestException();
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async update(
    @Param('criadorId') criadorId: string,
    @Param('id') id: string,
    @Body() updateProjetoDto: UpdateProjetoDto,
  ) {
    try {
      return await this.projetosService.update(
        +criadorId,
        +id,
        updateProjetoDto,
      );
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundException(e.meta?.cause);
      }
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async remove(@Param('criadorId') criadorId: string, @Param('id') id: string) {
    try {
      return await this.projetosService.remove(+criadorId, +id);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundException(e.meta?.cause);
      }
      throw new BadRequestException();
    }
  }
}
