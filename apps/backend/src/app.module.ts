import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventosModule } from './eventos/eventos.module';
import { EventosController } from './eventos/eventos.controller';

@Module({
  imports: [EventosModule],
  controllers: [AppController, EventosController],
})
export class AppModule {}
