import { Convidado } from '@/core'
import ConvidadoItem from './ConvidadoItem'

export interface ListaConvidadosProps {
  convidados: Convidado[]
}
export default function ListaConvidados({ convidados }: ListaConvidadosProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  )
}
