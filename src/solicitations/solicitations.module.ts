import { Module } from '@nestjs/common';
import { SolicitationsService } from './solicitations.service';
import { SolicitationsController } from './solicitations.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [SolicitationsController],
  providers: [SolicitationsService, PrismaService],
  exports: [SolicitationsService],
})
export class SolicitationsModule {}
