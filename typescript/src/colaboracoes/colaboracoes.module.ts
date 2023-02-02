import { Module } from '@nestjs/common';
import { ColaboracoesService } from './colaboracoes.service';
import { ColaboracoesController } from './colaboracoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ColaboracoesController],
  providers: [ColaboracoesService],
  imports: [PrismaModule],
})
export class ColaboracoesModule {}
