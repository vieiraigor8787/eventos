import Convidado from '../model/Convidado'
import validarConvidado from './validarConvidado'

export default function complementarConvidado(
  convidado: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidado)

  if (erros.length > 0) {
    throw new Error(erros.join('\n'))
  }

  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0
  //acompanhantes maior que zero, estar confirmado e possuir acompanhantes
  const temAcompanhantes =
    convidado.possuiAcompanhantes &&
    convidado.confirmado &&
    qtdeAcompanhantes > 0

  const convidadoAtualizado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanhantes,
  }

  return convidadoAtualizado as Convidado
}
