import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //Array<Negociacao> = Negociacao[]
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //Retornando uma lista somente leitura (ReadonlyArray)
    //ReadonlyArray<Negociacao> = readonly Negociacao[]
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}