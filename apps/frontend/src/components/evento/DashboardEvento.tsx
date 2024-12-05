import { Convidado, Evento } from '@/core'
import InformacoesEvento from './InformacoesEvento'
import AcessarViaQrCode from './AcessarViaQrCode'
import Estatistica from '../shared/Estatistica'
import ListaConvidados from './ListaConvidados'

export interface DashboardEventoProps {
  evento: Evento
  presentes: Convidado[]
  ausentes: Convidado[]
  totalGeral: number
}

export default function DashboardEvento({
  evento,
  presentes,
  totalGeral,
  ausentes,
}: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={evento} className="flex-1" />
        <AcessarViaQrCode evento={evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de convidados: "
          valor={evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Confirmados: "
          valor={presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          texto="Total de convidados: "
          valor={totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atualizar lista de convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram presença
      </span>
      <ListaConvidados convidados={presentes} />
      <span className="flex py-2 text-xl font-bold text-red-500">
        Convidados ausentes
      </span>
      <ListaConvidados convidados={ausentes} />
    </div>
  )
}
