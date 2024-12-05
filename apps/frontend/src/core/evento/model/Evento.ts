import Convidado from './Convidado'

export default interface Evento {
  id: string
  alias: string //aniversario-rebeca-2025
  senha: string
  nome: string
  data: Date
  local: string
  descricao: string
  imagem: string
  imagemBg: string
  publicoEsperado: number
  convidados: Convidado[]
}
