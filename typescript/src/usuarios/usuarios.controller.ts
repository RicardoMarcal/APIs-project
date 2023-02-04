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
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioEntity } from './entities/usuario.entity';

@Controller('usuarios')
@ApiTags('Usuários')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiCreatedResponse({ type: UsuarioEntity })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.usuariosService.create(createUsuarioDto);
    } catch (e) {
      if (e.code === 'P2002') {
        throw new BadRequestException(
          'This email violates the unique constraint',
        );
      }
      throw new BadRequestException();
    }
  }

  @Get()
  @ApiOkResponse({ type: UsuarioEntity, isArray: true })
  async findAll() {
    try {
      return await this.usuariosService.findAll();
    } catch (e) {
      throw new BadRequestException();
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  async findOne(@Param('id') id: string) {
    try {
      return await this.usuariosService.findOne(+id);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new BadRequestException("There is no 'usuario' with this id");
      }
      throw new BadRequestException();
    }
  }

  @Get('/email/:email')
  @ApiOkResponse({ type: UsuarioEntity })
  async findOneByEmail(@Param('email') email: string) {
    try {
      return await this.usuariosService.findOneByEmail(email);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new BadRequestException("There is no 'usuario' with this email");
      }
      throw new BadRequestException();
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
      if (e.code === 'P2025') {
        throw new BadRequestException("There is no 'usuario' with this id");
      }
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: UsuarioEntity })
  async remove(@Param('id') id: string) {
    try {
      return await this.usuariosService.remove(+id);
    } catch (e) {
      if (e.code === 'P2025') {
        throw new BadRequestException("There is no 'usuario' with this id");
      }
      throw new BadRequestException();
    }
  }
}
