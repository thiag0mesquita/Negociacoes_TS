export class Negociacao {
    //readonly = depois de criado não pode ser alterado
    constructor(
        private _data: Date, 
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    
    //programação defenciva : data
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    
    get volume(): number {
        return this.quantidade * this.valor;
    }
}
