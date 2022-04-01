import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo<Negociacao>{
    //readonly = depois de criado não pode ser alterado
    constructor(
        private _data: Date, 
        public readonly quantidade: number,
        public readonly valor: number
    ) {
    
    }
    
    //programação defenciva : data
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    
    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const date = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return` 
            Data: ${this._data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}
            `;
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }


}
