import { Convidado, Evento } from 'core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  salvar(evento: Evento) {
    return this.prisma.evento.create({
      data: {
        ...(evento as any),
        convidados: { create: evento.convidados },
      },
    });
  }

  salvarConvidado(evento: Evento, convidado: Convidado) {
    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        evento: {
          connect: { id: evento.id },
        },
      },
    });
  }

  async buscarTodos(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  async buscarPorId(
    id: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    }) as any;
  }

  async buscarPorAlias(
    alias: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      select: {
        id: true,
        alias: true,
        nome: true,
        descricao: true,
        data: true,
        local: true,
        publicoEsperado: completo,
        imagem: true,
        imagemBackground: true,
        convidados: completo,
      },
      where: { alias },
    }) as any;
  }
}
