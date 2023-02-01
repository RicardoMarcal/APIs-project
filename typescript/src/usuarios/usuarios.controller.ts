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
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioEntity } from './entities/usuario.entity';

@Controller('usuarios')
@ApiTags('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiCreatedResponse({ type: UsuarioEntity })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.usuariosService.create(createUsuarioDto);
    } catch (e) {
      if (e.code === 'P2002') {
        throw new HttpException(
          'This email violates the unique constraint',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  @Get()
  @ApiOkResponse({ type: UsuarioEntity, isArray: true })
  async findAll() {
    try {
      return await this.usuariosService.findAll();
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  async findOne(@Param('id') id: string) {
    try {
      return await this.usuariosService.findOne(+id);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    try {
      return await this.usuariosService.update(+id, updateUsuarioDto);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  async remove(@Param('id') id: string) {
    try {
      return await this.usuariosService.remove(+id);
    } catch (e) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
}
