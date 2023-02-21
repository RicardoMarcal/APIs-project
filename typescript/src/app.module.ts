import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProjetosModule } from './projetos/projetos.module';
//import { ColaboracoesModule } from './colaboracoes/colaboracoes.module';
import { ListasModule } from './listas/listas.module';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [
    PrismaModule,
    UsuariosModule,
    ProjetosModule,
    //ColaboracoesModule,
    ListasModule,
    TarefasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
