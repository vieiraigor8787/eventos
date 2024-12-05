export default class Alias {
  static formatar(valor: string): string {
    return valor.replace(/ /g, '-').toLocaleLowerCase()
    //substitui todos espaços em branco e converte para '-'' e deixa tudo em minusculo
  }
}
