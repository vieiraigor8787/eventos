import { Id } from '../../shared'
import Evento from '../model/Evento'

export default function criarEvendoVazio(): Partial<Evento> {
  return {
    id: Id.novo(),
    nome: '',
    descricao: '',
    data: new Date(),
    local: '',
    publicoEsperado: 1,
    imagem: '',
    imagemBg: '',
  }
}
