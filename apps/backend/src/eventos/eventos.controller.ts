import { Controller, Get, Param } from '@nestjs/common';
import { Data, Evento, eventos, Id } from 'core';

@Controller('eventos')
export class EventosController {
  @Get()
  async buscarEventos() {
    return eventos.map(this.serializar);
  }

  @Get(':idOuAlias')
  async buscarEvento(@Param('idOuAlias') idOuAlias: string) {
    if (Id.valido(idOuAlias)) {
      return this.serializar(eventos.find((evento) => evento.id === idOuAlias));
    } else {
      return this.serializar(
        eventos.find((evento) => evento.alias === idOuAlias),
      );
    }
  }

  @Get('/validar/:alias/:id')
  async validarAlias(@Param('id') id: string, @Param('alias') alias: string) {
    const evento = eventos.find((evento) => evento.alias === alias);

    return { valido: !evento || evento.id === id };
  }

  private serializar(evento: Evento) {
    if (!evento) null;
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }
  private deserializar(evento: any): Evento {
    if (!evento) null;
    return {
      ...evento,
      data: Data.desformatar(evento.data),
    };
  }
}
