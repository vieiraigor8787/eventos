import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventosController } from './eventos.controller';
import { EventoPrisma } from './evento.prisma';

@Module({
  imports: [DbModule],
  controllers: [EventosController],
  providers: [EventoPrisma],
})
export class EventosModule {}
