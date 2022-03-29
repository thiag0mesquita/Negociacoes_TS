import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //Array<Negociacao> = Negociacao[]
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //Retornando uma lista somente leitura (ReadonlyArray)
    //ReadonlyArray<Negociacao> = readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}