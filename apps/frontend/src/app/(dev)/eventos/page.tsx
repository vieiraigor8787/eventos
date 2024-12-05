'use client'

import Image from 'next/image'
import Link from 'next/link'
import { eventos } from '@/core'
import { QRCode } from 'react-qrcode'

export default function PaginaEventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden"
        >
          <div className="relative w-full h-44">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center flex-1 p-7 gap-5 text-center">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400 text-center">
              {evento.descricao}
            </p>
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-52 h-52"
            />
            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
