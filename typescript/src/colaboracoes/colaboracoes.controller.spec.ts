import { Test, TestingModule } from '@nestjs/testing';
import { ColaboracoesController } from './colaboracoes.controller';
import { ColaboracoesService } from './colaboracoes.service';

describe('ColaboracoesController', () => {
  let controller: ColaboracoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboracoesController],
      providers: [ColaboracoesService],
    }).compile();

    controller = module.get<ColaboracoesController>(ColaboracoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
