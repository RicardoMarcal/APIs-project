import { Test, TestingModule } from '@nestjs/testing';
import { ColaboracoesService } from './colaboracoes.service';

describe('ColaboracoesService', () => {
  let service: ColaboracoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColaboracoesService],
    }).compile();

    service = module.get<ColaboracoesService>(ColaboracoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
