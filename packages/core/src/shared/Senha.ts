export default class Senha {
  static nova(tamanho: number = 15): string {
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'
    const maiusculas = minusculas.toUpperCase()
    const numeros = '0123456789'
    const especiais = '!Q#$%&*'

    const grupos = [minusculas, maiusculas, especiais, numeros]
    const senha = []

    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)]
      const indice = Math.floor(Math.random() * grupo.length)
      senha.push(grupo[indice])
    }

    return senha.join('')
  }
}
