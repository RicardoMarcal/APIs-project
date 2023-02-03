import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
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
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOkResponse({ type: ProjetoEntity, isArray: true })
  async findAll(@Param('criadorId') criadorId: string) {
    try {
      return await this.projetosService.findAll(+criadorId);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async findOne(@Param('id') id: string) {
    try {
      return await this.projetosService.findOne(+id);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async update(
    @Param('id') id: string,
    @Body() updateProjetoDto: UpdateProjetoDto,
  ) {
    try {
      return await this.projetosService.update(+id, updateProjetoDto);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProjetoEntity })
  async remove(@Param('id') id: string) {
    try {
      return await this.projetosService.remove(+id);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
