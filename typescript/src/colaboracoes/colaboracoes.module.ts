import { Module } from '@nestjs/common';
import { ColaboracoesService } from './colaboracoes.service';
import {
  ColaboracoesController,
  ColaboracoesProjetosController,
} from './colaboracoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ColaboracoesController, ColaboracoesProjetosController],
  providers: [ColaboracoesService],
  imports: [PrismaModule],
})
export class ColaboracoesModule {}
