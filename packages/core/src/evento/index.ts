import Evento from './model/Evento'
import Convidado from './model/Convidado'
import complementarConvidado from './functions/complementarConvidado'
import complementarEvento from './functions/complementarEvento'
import criarConvidadoVazio from './functions/criarConvidadoVazio'
import criarEvendoVazio from './functions/criarEvendoVazio'

export type { Evento, Convidado }
export {
  complementarConvidado,
  complementarEvento,
  criarConvidadoVazio,
  criarEvendoVazio,
}
