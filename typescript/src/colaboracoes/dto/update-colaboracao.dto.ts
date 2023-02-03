import { PartialType } from '@nestjs/swagger';
import { CreateColaboracaoDto } from './create-colaboracao.dto';

export class UpdateColaboracaoDto extends PartialType(CreateColaboracaoDto) {}
