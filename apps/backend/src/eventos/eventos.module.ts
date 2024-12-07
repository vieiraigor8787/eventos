import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { EventosController } from './eventos.controller';

@Module({
  imports: [DbModule],
  controllers: [EventosController],
})
export class EventosModule {}
