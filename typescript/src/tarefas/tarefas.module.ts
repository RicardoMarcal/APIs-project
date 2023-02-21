import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
  imports: [PrismaModule],
})
export class TarefasModule {}
