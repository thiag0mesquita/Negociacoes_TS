import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });

} else {
    throw new Error("Não foi possível inicializar a aplicação. Verifique se o elemento form existe na página.");
}

const botaoImportar = document.querySelector("#botao-importar");
if (botaoImportar) {
    botaoImportar.addEventListener("click", () => {
        controller.importarDados()
    });
} else {
    throw new Error("Não foi possível inicializar a aplicação. Verifique se o elemento form existe na página.");
}