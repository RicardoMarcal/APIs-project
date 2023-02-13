import { Module } from '@nestjs/common';
import { ListasService } from './listas.service';
import { ListasController } from './listas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ListasController],
  providers: [ListasService],
  imports: [PrismaModule],
})
export class ListasModule {}
