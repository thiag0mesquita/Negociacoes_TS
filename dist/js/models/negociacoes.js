export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Retornando uma lista somente leitura (ReadonlyArray)
    lista() {
        return this.negociacoes;
    }
}
