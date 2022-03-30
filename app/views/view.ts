export abstract class View <T>{
    //protected para que a classe filha possa acessar
    protected elemento: Element;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) { 
            this.elemento = elemento as HTMLElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = true;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    //abstract: a classe filha que implementa o método(template)
    protected abstract template(model: T): string;
}