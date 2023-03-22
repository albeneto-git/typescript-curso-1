import { Imprimivel } from "./imprimivel.js";

export function imprimir(... objetos : Imprimivel[]){

    objetos.forEach(negociacao =>{
        console.log(negociacao.paraTexto());
    })
}
