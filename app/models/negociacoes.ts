import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //Retornando uma lista somente leitura (ReadonlyArray)
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

}

