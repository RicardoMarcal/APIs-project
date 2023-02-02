import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProjetosModule } from './projetos/projetos.module';
import { ColaboracoesModule } from './colaboracoes/colaboracoes.module';

@Module({
  imports: [PrismaModule, UsuariosModule, ProjetosModule, ColaboracoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
